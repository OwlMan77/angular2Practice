import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverId = 10;
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }

  toggleServerStatus() {
    if (this.serverStatus === 'Offline') {
      this.serverStatus = 'Online'
    }else {
      this.serverStatus = 'Offline';
    }
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
