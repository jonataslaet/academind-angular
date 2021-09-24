import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverAdded: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintAdded: EventEmitter<{name: string, content: string}> = new EventEmitter<{name: string, content: string}>();

  @ViewChild('inputServerContent', {static: true})
  inputServerContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverAdded.emit({
      name: nameInput.value,
      content: this.inputServerContent.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      name: nameInput.value,
      content: this.inputServerContent.nativeElement.value
    });
  }

}
