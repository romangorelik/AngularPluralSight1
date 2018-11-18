import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, characters: string): string {
    let newStr = value.replace(characters, ' ');
    return newStr;
  }

}
