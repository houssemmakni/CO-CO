import { Component } from '@angular/core';
import { WebSocketService } from '../../Service/WebSocketService';
@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent {
  unsubscribe:boolean=false;
  message: string | null = null;
  constructor(private webSocketService: WebSocketService) { this.webSocketService.connectAndSubscribe().then(() => {
    this.webSocketService.getMessage().subscribe((message) => {
      this.unsubscribe = true;
      this.message = message;
      console.log(message);
      setTimeout(() => {
        this.message = null;
        this.unsubscribe = false;
      }, 13000);
    });
  });
  }
}
