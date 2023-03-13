import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let newValue = value

    if (typeof value === 'string') {
      newValue = value.replace(/[aeiouà-ú]/gi, '')

      if (args[0]) {
        newValue = `${args[0]} ${newValue}`
      }

      if (args[1]) {
        newValue = `${newValue} ${args[1]}`
      }
    }


    return newValue;
  }

}
