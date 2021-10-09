import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        $(document).ready(() => {
            let heightBody = $('html').css('height');
            let heightNav = $('.navigation').css('height');
        });
    }
}
