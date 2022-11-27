import { Injectable, NgModuleRef } from '@angular/core';
import { from, mergeMap, Observable } from 'rxjs';
import { PluginProcessorsService } from './plugin-processors.service';

@Injectable({
  providedIn: 'root',
})
export class PluginModuleBootstrapperService {
  private savedModules: NgModuleRef<unknown>[] = [];

  constructor(private processors: PluginProcessorsService) {}

  bootstrapSaved(): Observable<void> {
    const modules = this.savedModules;
    this.savedModules = [];

    return from(modules).pipe(mergeMap((module) => this.bootstrap(module)));
  }

  bootstrap(module: NgModuleRef<unknown>): Observable<void> {
    return this.processors.process(module);
  }

  save(module: NgModuleRef<unknown>): void {
    this.savedModules.push(module);
  }
}
