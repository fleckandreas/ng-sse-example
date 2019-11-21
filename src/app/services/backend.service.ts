import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface IClientRegistration {
  /* id: string;
   date: string;*/
  name: string;
}







@Injectable({
  providedIn: 'root'
})
export class BackendService {
  public clients$: BehaviorSubject<Array<IClientRegistration>> = new BehaviorSubject([]);

  protected _eventSource: EventSource;

  // have we subscribed to an event stream yet?
  protected _subscribed: boolean = false;

  private apiurl = 'http://localhost/ng-sse.php/';

  constructor(private httpClient: HttpClient) { }
  public registerAsClient(name) {

    this.httpClient.put(this.apiurl + 'registerclient', { name: name }).subscribe(data => {
      console.log(data);
    });
  }
  clearDB() {
    this.httpClient.get(this.apiurl + 'cleardb').subscribe(data => {
      console.log(data);
    })
  }
  public registerAsServer() {
    if (!this._subscribed) {
      this._eventSource = new EventSource(this.apiurl + 'subscribe');
      this._eventSource.addEventListener('registeredclients', (message: any) => {
        console.log('clients');
        const clients: Array<IClientRegistration> = JSON.parse(message.data);
        this.clients$.next(clients);
      });
      this._eventSource.addEventListener('stopped', (message: any) => {
        console.log('stopped by server');
        this._subscribed = false;
        this._eventSource.close();
      });

      this._eventSource.onmessage = (data) => this.__onMessage(data);
      this._eventSource.onerror = (evt) => this.__onSseError(evt);
      this._eventSource.onopen = (evt) => this.__onSseOpen(evt);
      console.log(this._eventSource);

      this._subscribed = true;
    }
  }
  public disconnectServer() {
    if (this._subscribed) {
      this._eventSource.close();
      this._subscribed = false;
    }
  }



  private __onMessage(message: any): void {
    // this._eventSource.addEventListener will be preferred
    console.log('__onMessage');
    console.log(message);
  }
  private __onSseOpen(e: any): void {
    // modify event handling as you see fit
    console.log("SSE Open: ", e);
  }
  private __onSseError(e: any): void {
    // modify event handling as you see fit
    console.log("SSE Event failure: ", e);
    this._subscribed = false;
    this._eventSource.close();
  }
}
