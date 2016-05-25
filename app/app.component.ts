import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

import {SimpleDemoComponent} from './simple-demo.component';

@Component({
  selector: 'my-app',
  directives: [AlertComponent, SimpleDemoComponent],
  template: `
  <simple-demo></simple-demo>
  `
})
export class AppComponent {
}
