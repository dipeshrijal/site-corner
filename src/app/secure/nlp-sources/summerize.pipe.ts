import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summerize'
})

export class SummerizePipe implements PipeTransform {
  transform(inputs: string, maxlength?: number) {
    if (!inputs) {
      return null;
    }

    maxlength = maxlength ? maxlength : 60;

    return (inputs.substr(0 , maxlength - 1)) + '...';

  }


}
