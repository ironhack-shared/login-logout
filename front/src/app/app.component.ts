import { Component } from '@angular/core';
import { SessionService } from '../services/session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private sessionService:SessionService) { }

  logout(){
    this.sessionService.logout().subscribe();
  }
}
