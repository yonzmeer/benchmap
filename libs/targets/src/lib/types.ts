import { Observable } from 'rxjs';

export interface Target {
  id: string;
}

export interface TargetHandler {
  name: string;

  handle(target: Target): void;
}

export interface TargetsModuleOptions {
  activeHandler$: Observable<string>;
}

export interface TargetsCreatorOptions {
  amount: number;
  updateInterval: number;
}
