import { Inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  concatAll,
  distinctUntilChanged,
  filter,
  interval,
  map,
  Observable,
  shareReplay,
  switchMap,
  tap,
  withLatestFrom,
  zip,
} from 'rxjs';
import { v4 as uuid } from 'uuid';
import {
  DEFAULT_TARGETS_CREATOR_OPTIONS,
  TARGETS_MODULE_OPTIONS,
} from './config';
import {
  Target,
  TargetHandler,
  TargetsCreatorOptions,
  TargetsModuleOptions,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class TargetsService {
  private nameToHandlers: Record<string, TargetHandler> = {};

  private _targetsCreatorOptions$ = new BehaviorSubject<TargetsCreatorOptions>(
    DEFAULT_TARGETS_CREATOR_OPTIONS
  );

  private readonly activeHandler$ = this.options.activeHandlerName$.pipe(
    distinctUntilChanged(),
    map((name) => this.nameToHandlers[name]),
    shareReplay(1)
  );

  constructor(
    @Inject(TARGETS_MODULE_OPTIONS) private options: TargetsModuleOptions
  ) {
    this.activeHandler$
      .pipe(
        switchMap((handler) =>
          this.createUpdatingTargets().pipe(
            map((target) => ({ handler, target }))
          )
        ),
        filter(({ handler }) => Boolean(handler))
      )
      .subscribe(({ handler, target }) => handler.handle(target));
  }

  set targetsCreatorOptions(value: TargetsCreatorOptions) {
    this._targetsCreatorOptions$.next(value);
  }

  add(targetHandler: TargetHandler): void {
    this.nameToHandlers[targetHandler.name] = targetHandler;
  }

  private createUpdatingTargets(): Observable<Target> {
    return this._targetsCreatorOptions$.pipe(
      map(({ amount }) => amount),
      distinctUntilChanged(),
      withLatestFrom(this.activeHandler$),
      tap(([, activeHandler]) => activeHandler?.deleteAll()),
      switchMap(([length]) =>
        zip(Array.from({ length }, () => this.createUpdatingTarget()))
      ),
      concatAll()
    );
  }

  private createUpdatingTarget(): Observable<Target> {
    const id = uuid();

    return this._targetsCreatorOptions$.pipe(
      map(({ updateInterval }) => updateInterval),
      distinctUntilChanged(),
      switchMap((updateInterval) => interval(updateInterval)),
      map(() => ({ id } as Target))
    );
  }
}
