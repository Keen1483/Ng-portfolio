import { Component, OnInit, Input } from '@angular/core';
import { TypographyService } from '../../services/typography.service';
import { MatSidenav } from '@angular/material/sidenav';

declare var $: any;

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

    @Input() sidenav!: MatSidenav;

    constructor(private typography: TypographyService) { }

    ngOnInit(): void {
        $(document).ready(() => {
            $('.side-menu').css('height', this.typography.heightContentPage());
        });
    }

}
