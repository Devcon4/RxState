import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { TestAction } from './test-action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  testData;

  constructor(private testAction: TestAction){}

  ngOnInit() {
    this.testAction
      .takeWhile((()=>this).bind(this))
      .subscribe(d => this.testData = d, () => {}, () => {console.log('App complete!')});
  }
  
}
