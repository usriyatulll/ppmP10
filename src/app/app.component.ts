import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [{ title: 'Mahasiswa', url: '/mahasiswa', icon: 'person' }];
  public labels = [];
  constructor() {}
}
