import { Component, OnInit, ɵLifecycleHooksFeature } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { RecordReqService } from '../services/record-req.service';
import { Species } from '../models/Species';
import { MapTableItem } from '../tables/map-table/map-table-datasource';
import { SpeciesMapTableItem } from '../tables/species-map-table/species-map-table-datasource';

declare var ol: any;
declare var globmap: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

// table programmieren mit dc-js cross filter
export class MapComponent implements OnInit {
  constructor(private service: RecordReqService) {}

  data: any;
  speciesList: Species[] = [];

  mapTableData: MapTableItem[] = [];
  speciesTableData: SpeciesMapTableItem[] = [];

  latitude: number = 48.40914;
  longitude: number = 15.612974;

  // map: any;

  ngOnInit() {

    // Vom Service die Daten holen und in einer Liste speichern
    this.service.getAllRecords().subscribe((data) => {
      // console.log(data);
      this.data = data;

      this.data.occurrences.forEach(element => {
        const spec = new Species(element);
        this.speciesList.push(spec);
        // console.log(spec);
      });

      this.mapTableData.push({group: 'eventDate', speciesCount: 11});
      this.mapTableData.push({group: 'eventDate', speciesCount: 12});

      buildMap(this.speciesList);
    });
  }
}

function buildMap(speciesList) {

    let features = '';
    console.log(speciesList);
    speciesList.forEach(el => {
      features += JSON.stringify({
          type: 'Feature',
          properties: {
            description: '<strong>Krems an der Donau</strong>'
          },
          geometry: {
            type: 'Point',
            coordinates: [el.decimalLongitude, el.decimalLatitude]
          }
        });
        features += ',';
    console.log(el.decimalLatitude);
  });
  features = features.substring(0, features.length - 1);
  console.log(features);
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

    // Add resize for loaded map so it doesnt look broken ;)
    map.resize();

    /* Image: An image is loaded and added to the map. */
    map.loadImage('images/dot.png', function(error, image) {
      if (error) {
        throw error;
      }

      // Marker zur Map hinzufügen
      map.addImage('custom-marker', image);

    /*  map.addSource('markerSource', {
        type: 'geojson',
        data: features
      });

      map.addLayer({
        id: 'markers',
        type: 'symbol',
        source: 'markerSource',
        layout: {
          'icon-image': 'custom-marker'
        }
        });*/
      map.addLayer({
        id: 'markers',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              /*{
                type: 'Feature',
                properties: {
                  description: '<strong>Krems an der Donau</strong>'
                },
                geometry: {
                  type: 'Point',
                  coordinates: [15.613, 48.41]
                }
              },*/ features
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

