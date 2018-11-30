import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookend'
})


export class BookendPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
