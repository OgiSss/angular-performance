import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from 'src/app/helpers/fibonacci';

@Pipe({
  name: 'purePipe',
  pure: true,
})
export class PurePipePipe implements PipeTransform {
  transform(value: number): number {
    console.log('PURE PIPE');
    return fibonacci(value);
  }
}
