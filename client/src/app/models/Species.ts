import { CheckboxRequiredValidator } from '@angular/forms';

export class Species {
  dataResourceUid: string;
  occurrenceId: number;
  eventDate: number;
  scientificName: string;
  taxonRank: string;
  vernacularName: string;
  decimalLatitude: number;
  decimalLongitude: number;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  genusId: number;
  species: string;


  uuid: string;
  taxonConceptId: number;
  occurrenceYear: number;
  taxonRankId: number;
  speciesGuid: number;
  year: number;
  month: number;
  left: number;
  right: number;

  assertions: string[];
  speciesGroups: string[];
  rawScientificName: string;

  constructor(speciesResponse: any) { // alle namen der variablen von json nochmal kontrollieren
    // schauen ob der wert überhaupt da ist, wenn nicht dann 0 bzw. leer setzten
    this.dataResourceUid = speciesResponse.dataResourceUid;
    this.occurrenceId = speciesResponse.occurrenceID;
    this.eventDate = speciesResponse.eventDate;
    this.scientificName = speciesResponse.scientificName;
    this.taxonRank = speciesResponse.taxonRank;
    this.vernacularName = speciesResponse.vernacularName;
    this.decimalLatitude = speciesResponse.decimalLatitude;
    this.decimalLongitude = speciesResponse.decimalLongitude;
    this.kingdom = speciesResponse.kingdom;
    this.phylum = speciesResponse.phylum;
    this.class = speciesResponse.class;
    this.order = speciesResponse.order;
    this.family = speciesResponse.family;
    this.genus = speciesResponse.genus;
    this.genusId = speciesResponse.genusId;
    this.species = speciesResponse.species;


    this.uuid = speciesResponse.uuid;
    this.taxonConceptId = speciesResponse.taxonConceptId;
    this.occurrenceYear = speciesResponse.occurrenceYear;
    this.taxonRankId = speciesResponse.taxonRankId;
    this.speciesGuid = speciesResponse.speciesGuid;
    this.year = speciesResponse.year;
    this.month = speciesResponse.month;
    this.left = speciesResponse.left;
    this.right = speciesResponse.right;
    this.assertions = speciesResponse.assertions;
    this.speciesGroups = speciesResponse.speciesGroups;
  }
}
