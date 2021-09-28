import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit {

  @Input() element: {type: string, name: string, content: string};

  @ViewChild('heading', {static: true}) head : ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('Text content: ' + this.head.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log('Text content: ' + this.head.nativeElement.textContent);
  }

}
