import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from "./nav/nav.component";
import {NavService} from "./nav/nav.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import { NotesComponent } from './notes/notes.component';
import NotesService from "./services/notes.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { PictureComponent } from './picture/picture.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { MapTableComponent } from './tables/map-table/map-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { DatasetTableComponent } from './tables/dataset-table/dataset-table.component';
import { EventTableComponent } from './tables/event-table/event-table.component';
import { TaxonomyTableComponent } from './tables/taxonomy-table/taxonomy-table.component';
import { GeospatialTableComponent } from './tables/geospatial-table/geospatial-table.component';
import { AdditionalPropertiesTableComponent } from './tables/additional-properties-table/additional-properties-table.component';
import { SpeciesMapTableComponent } from './tables/species-map-table/species-map-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotesComponent,
    PictureComponent,
    HomeComponent,
    MapComponent,
    MapTableComponent,
    SearchComponent,
    ProfileComponent,
    DatasetTableComponent,
    EventTableComponent,
    TaxonomyTableComponent,
    GeospatialTableComponent,
    AdditionalPropertiesTableComponent,
    SpeciesMapTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, NavService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
