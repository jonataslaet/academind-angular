import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverAdded: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintAdded: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverAdded.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
