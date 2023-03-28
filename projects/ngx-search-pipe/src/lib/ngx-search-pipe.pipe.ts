import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxSearchPipe'
})
export class NgxSearchPipe implements PipeTransform {
  transform(items: any[] | null | undefined, searchText: any): any[] {
    if (items && searchText) {
      return items.filter(item => {
        let flat: any = {};
        
        const flatObject = (obj: any): any => {
          Object.keys(obj).forEach((key: string) => {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              const flatChildObject = flatObject(obj[key]);
              
              Object.keys(flatChildObject).forEach((childKey: string) => {
                flat[`${key}.${childKey}`] = flatChildObject[childKey];
              });
            } else
              flat[key] = obj[key];
          });
  
          return flat;
        };

        return Object.values(flatObject(item)).join(' ').toLowerCase().includes(searchText.toLowerCase());
      });
    }
    
    return items || [];
  }
}