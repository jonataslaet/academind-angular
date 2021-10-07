import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featureFired: EventEmitter<string> = new EventEmitter;

  onSelected(feature: string){
    return this.featureFired.emit(feature);
  }
}
