import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: {type: string, name: string, content: string}[] = [{type: 'server', name: 'Testserver', content: 'Just a test'}];
}
