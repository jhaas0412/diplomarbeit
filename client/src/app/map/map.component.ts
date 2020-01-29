import { Component, OnInit, ɵLifecycleHooksFeature } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

// table programmieren mit dc-js cross filter

export class MapComponent implements OnInit {

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

 /*   var markers = new ol.Layer.Markers( 'Markers' );
    this.map.addLayer(markers);

  var size = new ol.Size(21, 25);
  var offset = new ol.Pixel(-(size.w / 2), -size.h);
  var icon = new ol.Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);
  markers.addMarker(new ol.Marker(new ol.LonLat(15.612974, 48.409140), icon));
  markers.addMarker(new ol.Marker(new ol.LonLat(15.7, 48.5), icon.clone()));
*/
    // Vector Layer

/*    const EUCountries = new ol.layer.VectorImage({
      source: new ol.source.Vector({
        url: 'vectors/map.geojson',
        format: new ol.format.GeoJSON()
      }),
      visible: true,
      title: 'EUCountries'
    });

    this.map.addLayer(EUCountries);*/

    //mapbox.js
    
     const krems = new ol.layer.VectorImage({
      source: new ol.source.Vector({
        url: 'vectors/krems.geojson',
        format: new ol.format.GeoJSON()
      }),
      visible: true,
      title: 'Krems'
    });

    krems.setZIndex(1000);
    this.map.addLayer(krems);


    // Vector Feature Popup Logic

    this.map.on('click', function(e){
      console.log(e);
      this.map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
        console.log(feature)
      })
    });

   /* const source = new ol.source.vector({});
    const layer = new ol.layer.vector({ source: source});
    this.map.addLayer(layer);
    const marker = new ol.Feature({
      geometry: new ol.geom.Point(fromLonLat([15.612974, 48.409140]))
    });

    source.addFeature(marker);*/

  }
}
