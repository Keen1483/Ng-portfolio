import { Component, OnInit } from '@angular/core';
import { TypographyService } from '../../services/typography.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private typography: TypographyService) { }

    ngOnInit(): void {
        $(document).ready(() => {
            $('.home').css('height', this.typography.heightContentPage());
        });
    }

}
