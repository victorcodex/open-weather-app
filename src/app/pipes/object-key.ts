import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objectKey'})
export class ObjectKeyPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }
}
