mult-by.pipe.ts



import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multBy' //Название пайпа 
})
export class MultByPipe implements PipeTransform { 

  transform(num: number, pow: number = 2): number {  //Параметры которые принимает пайп для pow задаем по умолчанию 2 то есть если задавать этот пайп по умолчанию будет умножаться на 2
    return num * pow;  //Возвращает в пайп умножение чисел 
  }
}




app.component.html

<p>{{10 | multBy}}</p> //20
<p>{{10 | multBy:2}}</p> //20
<p>{{10 | multBy:3}}</p> //30
<p>{{10 | multBy:4}}</p> //40
<p>{{10 | multBy:5}}</p> //50
