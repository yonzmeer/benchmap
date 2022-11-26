import { Inject, Injectable, NgModuleRef } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { PLUGIN_PROCESSORS } from './config';
import { PluginProcessor } from './interfaces';
import { wrapIntoObservable } from './utils/collections';

@Injectable({
  providedIn: 'root',
})
export class PluginProcessorsService {
  pluginProcessors: PluginProcessor[];

  constructor(@Inject(PLUGIN_PROCESSORS) pluginProcessors: PluginProcessor[]) {
    this.pluginProcessors = pluginProcessors;
  }

  process(moduleRef: NgModuleRef<any>): Observable<void> {
    return from(this.pluginProcessors).pipe(
      mergeMap((processor) => wrapIntoObservable(processor.process(moduleRef)))
    );
  }
}
