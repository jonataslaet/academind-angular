import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  clickLogs = [];

  toggle() {
    this.clickLogs.push(this.clickLogs.length + 1);
    this.showDetails = !this.showDetails;
  }
}
