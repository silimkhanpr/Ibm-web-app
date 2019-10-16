import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  current = 2;
  title = 'myApp';
  steps=[{
    text: 'Personal',
    state: ['complete']

  },
  {
    text: 'Company',
    state: ['current']
  },
  {
    text: 'Agreements',
    state: ['incomplete']
  },
  {
    text: 'Review',
    state: ['incomplete']
  },
  ]
  
   constructor() { }
  ngOnInit() {
    console.log(this.steps)
   }
  
}
