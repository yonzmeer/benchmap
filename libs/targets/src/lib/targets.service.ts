import { Inject, Injectable } from '@angular/core';
import { filter, interval, map, switchMap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { TARGETS_MODULE_OPTIONS } from './config';
import { TargetHandler, TargetsModuleOptions } from './types';

@Injectable({
  providedIn: 'root',
})
export class TargetsService {
  private nameToHandlers: Record<string, TargetHandler> = {};
  constructor(
    @Inject(TARGETS_MODULE_OPTIONS) private options: TargetsModuleOptions
  ) {
    options.activeHandler$
      .pipe(
        map((name) => this.nameToHandlers[name]),
        switchMap((handler) =>
          interval(1000).pipe(map((target) => ({ target, handler })))
        ),
        filter(({ handler }) => Boolean(handler))
      )
      .subscribe(({ handler }) => handler.handle({ id: uuid() }));
  }

  add(targetHandler: TargetHandler): void {
    this.nameToHandlers[targetHandler.name] = targetHandler;
  }
}
