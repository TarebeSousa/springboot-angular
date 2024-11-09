import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrigido aqui
  imports: [CommonModule, RouterOutlet, PrincipalComponent]
})
export class AppComponent {
  title = 'api-front';
}