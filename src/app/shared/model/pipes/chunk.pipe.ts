import { Pipe, PipeTransform } from '@angular/core';
import { chunk } from 'lodash-es';

@Pipe({
  name: 'chunk',
})
export class ChunkPipe implements PipeTransform {
  transform(value: any, n: number): any {
    return this.chunk(value, n);
  }

  chunk(arr, n) {
    const newArr = [];
    if (!arr) {
      return [];
    }

    return chunk(arr, n);
  }
}
