import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { Itinerary } from './itinerary';
import { HttpClient} from '@angular/common/http';
import {environment} from'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  //declare variables--global
  itinerarys: Itinerary[]; //list of all employees
  flights: Flight[]; //list of all employees
  formData: Itinerary=new Itinerary();
  constructor(private httpClient:HttpClient) { }


  getAllEmployees()
  {
    this.httpClient.get(environment.apiUrl+'/api/flightdetails')
      .toPromise().then(response =>
          this.itinerarys=response as Itinerary[]);
  }
  //get a particular Employee by id
  getEmployee(empId: number) :Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+'/api/employees/'+empId);
  }
  //insert Employee
  insertEmployee(emp: Itinerary) :Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+'/api/employees/',emp);
  }
  //update Employee
  updateEmployee(emp: Itinerary) :Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+'/api/employees/',emp);
  }

  //delete Employee
  deleteEmployee(empId: number) :Observable<any>
  {
    return this.httpClient.delete(environment.apiUrl+'/api/employees/'+empId);
  }

  //GET Department for dropdownlist
  getAllDepartments(){
    this.httpClient.get(environment.apiUrl+'/api/flights')
      .toPromise().then(response =>
        this.flights=response as Flight[])
  }
}
