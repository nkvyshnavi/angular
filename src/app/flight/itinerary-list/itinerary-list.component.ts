import { Component, OnInit } from '@angular/core';
import {ItineraryService} from "src/app/shared/itinerary.service";
@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.scss']
})
export class ItineraryListComponent implements OnInit {

  constructor(public itineraryService: ItineraryService) { }

  ngOnInit(): void {
    this.itineraryService.getAllEmployees()
  }

}
