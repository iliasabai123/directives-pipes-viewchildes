style1.directive.ts

import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appStyle1]' //как будет прописыватьса данная директива 
})
export class Style1Directive {

  constructor(private el:ElementRef) {  //приватная переменная которая будет изменять элементы обращение к нему 
    el.nativeElement.style.color = 'red';  //стиль которая будет применена к элементу к которой была задана данная директива
  }
}






//Второй способ



import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle1]'
})
export class Style1Directive {

  constructor(private el:ElementRef,
              private renderer:Renderer2) {  //Добавляем в конструктор рендерер для работы с директивой 
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');  //Изменяем стиль цвета с помощью метода setStyle первым параметром будет элемент вторым свойство какой стиль к примеру а третьим значение свойство у этого метода есть еще несколько методов надо бы изучить 
  }
}
