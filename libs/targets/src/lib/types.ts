import { Observable } from 'rxjs';

export interface Target {
  id: string;
}

export interface TargetHandler {
  name: string;

  handle(target: Target): void;

  deleteAll(): void;
}

export interface TargetsModuleOptions {
  activeHandlerName$: Observable<string>;
}

export interface TargetsCreatorOptions {
  amount: number;
  updateInterval: number;
  updateProbability: number;
}
