import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'funani-environmental-management-solotion-app';
  fectureSelected = 'clients';

  seleted(fecture: string){
    this.fectureSelected = fecture;
  }
}
