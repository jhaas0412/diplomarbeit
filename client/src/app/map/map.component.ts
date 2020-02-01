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
  constructor() {}

  latitude: number = 48.40914;
  longitude: number = 15.612974;

  map: any;

  ngOnInit() {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    // Map erstellen, Center in Spitz an der Donau
    mapboxgl.accessToken =
      'pk.eyJ1IjoianVsaWEwNDEyIiwiYSI6ImNrNjExYTBkMDBjdjQzZm9ha3VnZHZ6NzQifQ.4Hw-RyHSXwM7oNDxDbcu7w';
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 9,
      center: [15.42558, 48.35422]
    });

    map.on('load', function() {
      // Add zoom and rotation controls to the map. FUNKTIONIERT NICHT
      map.addControl(new mapboxgl.NavigationControl());

      /* Image: An image is loaded and added to the map. */
      map.loadImage('images/dot.png', function(error, image) {
        if (error) {
          throw error;
        }

        // Marker zur Map hinzufügen
        map.addImage('custom-marker', image);
        map.addLayer({
          id: 'markers',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {
                    description: '<strong>Krems an der Donau</strong>'
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [15.613, 48.41]
                  }
                }
              ]
            }
          },
          layout: {
            'icon-image': 'custom-marker'
          }
        });
      });


      // Wachau-Polygon zur Map hinzufügen
      map.addSource('wachau', {
        type: 'geojson',
        // tslint:disable-next-line: max-line-length
        data:
          'https://sdi.noe.gv.at/at.gv.noe.geoserver/OGD/wfs?request=GetFeature&version=1.1.0&typeName=OGD:RRU_UNESCO&srsName=EPSG:4326&outputFormat=application/json'
      });

      map.addLayer({
        id: 'maine',
        type: 'line',
        source: 'wachau',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#888',
          'line-width': 2
        }
      });
    });
  }
}

