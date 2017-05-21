import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
  
})
export class AppComponent {
  message = 'This is the sample message.';


 clicked(event) {

   console.log('calling');
    lineGraph();
  }




}