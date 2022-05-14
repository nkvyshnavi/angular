import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ItineraryService} from "src/app/shared/itinerary.service";

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {

  constructor(public itineraryService: ItineraryService) { }

  ngOnInit(): void {
    this.itineraryService.getAllDepartments();
  }

  
  //reset form
  resetForm(form:NgForm){
    if(form !=null){
    form.resetForm();
    }
  }

  //Submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    let addId=this.itineraryService.formData.flightId;
    //insert or update check condition

  }

}
