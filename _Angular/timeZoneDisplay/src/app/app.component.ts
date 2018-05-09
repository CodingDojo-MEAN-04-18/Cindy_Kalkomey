import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'US Time Zone Display';
  switchPST: boolean;
  switchMST: boolean;
  switchCST: boolean;
  switchEST: boolean;
  newdate: Date;

  constructor() {
    this.switchPST = false;
    this.switchMST = false;
    this.switchCST = false;
    this.switchEST = false;
    this.newdate = new Date();
  }

  onButtonClick(data) { 
    console.log(`Click event is working, data:`, data);
    this.switchPST = (data == 'PST');
    this.switchMST = (data == 'MST');
    this.switchCST = (data == 'CST');
    this.switchEST = (data == 'EST');
    this.newdate = new Date;
    this.newdate = this.timeZone(this.newdate, data);
  }

  
  onButtonClear() { 
    console.log("Click event for Clear is working");
    this.newdate = null;
    this.switchPST = false;
    this.switchMST = false;
    this.switchCST = false;
    this.switchEST = false;
  }
  
  
  //helper function to adjust time for timezone
  timeZone(dt, zone){
      let hours: number = dt.getHours();
      if (zone == 'PST') {
        hours-=2
      } else if (zone == 'MST'){
        hours-=1
      } else if (zone == 'EST'){
        hours+=1
      };

      dt.setHours(hours);
      return dt;

      }
}
