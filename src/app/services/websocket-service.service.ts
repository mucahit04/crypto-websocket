import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketServiceService {
  constructor() {}

  subject: WebSocketSubject<any> | undefined;

  public connect(url: string) {
    this.create(url);
    console.log('Successfully connected: ' + url);
  }

  private create(url: string) {
    this.subject = new WebSocketSubject(url);

    return this.subject;
  }
}
