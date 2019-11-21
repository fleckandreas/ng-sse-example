import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor(private bs:BackendService) { }

  ngOnInit() {
  }
  registerClient(){
    const name = prompt('Name');
    if(name){
      this.bs.registerAsClient(name);
    }
  }
}
