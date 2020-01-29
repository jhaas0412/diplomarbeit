import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  latitude: number = 48.409140;
  longitude: number = 15.612974;

  map: any;

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([15.612974, 48.409140]),
        zoom: 13
      })
    });
  }

}
