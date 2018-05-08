import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// class EmailItem {
//   emailaddr: string;
//   importance: boolean;
//   subject: string;
//   content: string;
	
// 	constructor(addr: string, imp: boolean, subj: string, cont: string){
//     this.emailaddr = addr;
//     this.importance = imp;
//     this.subject = subj;
//     this.content = cont;
// 	}
// }

// let item = new EmailItem(
//   'bill@gates.com'',
//   true,
//   'New Windows',
//   'Windows XI will launch in year 2100.'
// );


export class AppComponent {
    items = [
        {email:  'Bill@Gates.com', importance: true, subject: 'New Windows', content: 'Windows XI will launch in year 2100.'},
        {email: 'ada@lovelace.com', importance: true, subject: 'Programming', content: 'Enchantress of Numbers'},
        {email: 'john@carmac.com', importance: false, subject: 'Updated Algo', content: 'New algorithm for shadow volumes'},
        {email: 'gabe@newel.com', importance: false, subject: 'HL3!', content: 'Just kidding ...'}
    ]
}
