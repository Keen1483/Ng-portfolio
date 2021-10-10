import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MapboxDialogComponent } from '../mapbox-dialog/mapbox-dialog.component';

declare var $: any;
declare var mapboxgl: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(public diologChat: MatDialog,
                public dialogMap: MatDialog) { }

    ngOnInit(): void {
        // SEND MESSAGE WITH MODAL BOX
        $(document).ready(() => {
            if ($('.footer')) {
                // OPEN NEW TAB FOR OTHERS DOMAINS
                $('.social').attr('target', function() {
                    if($('a').host == location.host) return '_self'
                    else return '_blank'
                });
            }
        });
    }

    openDialogChat(): void {
        this.diologChat.open(FormDialogComponent, {
            width: $('body').css('width'),
            height: '500px'
        });
    }

    openDialogMap(): void {
        this.dialogMap.open(MapboxDialogComponent, {
            width: '600px',
            height: '400px'
        });
    }

}
