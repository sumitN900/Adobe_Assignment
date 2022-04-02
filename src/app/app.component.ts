import { Component, VERSION } from "@angular/core";
import { from, of } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adobe_Assignment';
  searchText;
  

  name = "Angular " + VERSION.major;
  outstation_routes_all = [

    {  name: 'Mr.Nice,', country: 'India,', key: 'xd' },
    {  name: 'Aadhya,' , country: 'USA,' , key: 'photoshop'},
    {  name: 'Aanya ,' , country: 'UK,' , key: 'xd'},
    {  name: 'Advika,' , country: 'Canada,' , key: 'xd'},
    {  name: 'Bhavna,' , country: 'Russia,' , key: 'photoshop'},
    {  name: 'Brinda,' , country: 'China,' , key: 'xd'},
    {  name: 'Dynama,' , country: 'Germany,' , key: 'xd'},
    {  name: 'Dr Binita,' , country: 'Hong Kong,' , key: 'photoshop'},
    {  name: 'Chhaya,' , country: 'South Africa,' , key: 'xd'},
    {  name: 'Daksha, ' , country: 'Sri Lanka,' , key: 'photoshop'}

  ];
  outstation_routes = [];
  constructor() {
    this.getOutstationRoutes();
  }

  getOutstationRoutes() {
    of(this.outstation_routes_all)
      .pipe(
        mergeMap(x => from(x)),
        concatMap(x => of(x).pipe(delay(30000)))
      )
      .subscribe(res => {
        console.log(res);
        this.outstation_routes.push(res);
      });
  }

}
