import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapbox-dialog',
  templateUrl: './mapbox-dialog.component.html',
  styleUrls: ['./mapbox-dialog.component.scss']
})
export class MapboxDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<MapboxDialogComponent>) { }

    ngOnInit(): void {
        // MAPBXOGL FOR LOCATION
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlbjE0ODIiLCJhIjoiY2tyYzF3OGtxNDByczJxczZnbGpzaHJqOSJ9.zSuL8T_mdBDuD-YzKKGHAw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [9.7, 4.05],
            zoom: 18
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
