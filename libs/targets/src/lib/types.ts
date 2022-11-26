export interface Target {
  id: string;
}

export interface TargetHandler {
  handle(target: Target): void;
}
