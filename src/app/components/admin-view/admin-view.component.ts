import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  
  constructor(public bs:BackendService) { }

  ngOnInit() {
  }
  
  registerAsServer(){
    this.bs.registerAsServer();
  }
  disconnectServer(){
    this.bs.disconnectServer();
  }
  clearDB(){
    this.bs.clearDB();
  }
  registerAsClient(){
    const name = prompt('Name');
    if(name){
      this.bs.registerAsClient(name);
    }
  } 
}
