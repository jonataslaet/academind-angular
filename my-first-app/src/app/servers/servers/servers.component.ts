import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = 'Initial name';
  allowNewServer = false;
  serverCreated = false;
  statusCreationServer = 'No server was created';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreationServer(){
    this.serverCreated = true;
    this.statusCreationServer = 'Server was created. Its name is: ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  onAllowNewServer(){
    return this.serverName.length > 0;
  }
}
