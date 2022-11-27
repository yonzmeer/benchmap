import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bnp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes = ['', 'cesium'];

  constructor(private router: Router) {}

  click(route: string): void {
    this.router.navigateByUrl(route);
  }
}
