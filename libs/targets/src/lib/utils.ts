import { isEqual } from 'lodash';
import { distinctUntilChanged, MonoTypeOperatorFunction } from 'rxjs';

export function distinctUntilUnequal<T>(): MonoTypeOperatorFunction<T> {
  return distinctUntilChanged(isEqual);
}
