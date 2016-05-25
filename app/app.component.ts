import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  directives: [AlertComponent],
  template: `<alert type="info">ng2-bootstrap hello world!</alert>`
})
export class AppComponent {
}
