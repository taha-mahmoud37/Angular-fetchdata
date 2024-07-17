import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortdata',
})
export class SortdataPipe implements PipeTransform {
  transform(users: any[]): any[] {
    return users.sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x > y) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    });
  }
}
