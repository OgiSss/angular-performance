import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from 'src/app/helpers/fibonacci';

@Pipe({
  name: 'impure',
  pure: false,
})
export class ImpurePipe implements PipeTransform {
  transform(value: number): unknown {
    console.log('IMPURE PIPE');
    return fibonacci(value);
  }
}
