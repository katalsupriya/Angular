import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;

  serverId: number = 16;
  getServerStatus: string = "offline";
  serverCreationStatus="No server was created!";
  serverName="";
  twoWayServer="Server 1";


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
     this.serverCreationStatus="Server was created";
  }

  onUpdateServerName(event: Event){
    this.serverName= (<HTMLInputElement>event.target).value;
 }

}
