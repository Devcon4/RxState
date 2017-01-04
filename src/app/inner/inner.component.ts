import { Component, OnInit } from '@angular/core';
import { TestAction } from '../test-action.service';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  testData;

  constructor(private testAction: TestAction) { }

  ngOnInit() {

    this.testAction
      .takeWhile(() => this instanceof InnerComponent)
      .subscribe(d => this.testData = d, () => {}, () => {console.log('Inner complete!')});

    this.testAction.get();
    // this.testAction.set([
    //   {
    //     "postId": 1,
    //     "id": 1,
    //     "name": "Updated from inner!",
    //     "email": "Eliseo@gardner.biz",
    //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    //   }]);
  }

}
