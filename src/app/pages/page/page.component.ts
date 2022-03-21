import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public message = '';
  public messages: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    const messages = interval(2000);
    messages.pipe(take(6))
      .subscribe(
        (value) => {
          this.message = `this message number: ${value +1}`;
          this.messages.push(this.message);
        }
      )
  }

}
