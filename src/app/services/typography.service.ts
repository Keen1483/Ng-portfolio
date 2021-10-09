import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class TypographyService {

    constructor() { }

    heightContentPage(): string {
        let heightBody = $('html').css('height');
        let heightNav = $('.navigation').css('height');
        let heightContent = parseInt(heightBody) - parseInt(heightNav);

        return heightContent + 'px'; 
    }

    viewport(): number {
        let width = $('html').css('width');

        return parseInt(width);
    }
}
