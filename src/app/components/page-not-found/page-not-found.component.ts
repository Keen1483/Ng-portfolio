import { Component, OnInit } from '@angular/core';
import { TypographyService } from '../../services/typography.service';

declare var $: any;

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

    constructor(private typography: TypographyService) { }

    ngOnInit(): void {
        $(document).ready(() => {
            $('.page-not-found').css('height', this.typography.heightContentPage());
        });
    }

}
