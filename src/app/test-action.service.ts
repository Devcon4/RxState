import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface Action {
  get();
  set(data: any);
}

@Injectable()
export class TestAction extends BehaviorSubject<any> implements Action {

  constructor(private http: Http) { super(undefined); }

  get() {
    console.log('get called!');
    super.next(
      this.http.get('https://jsonplaceholder.typicode.com/comments')
        .map((res: any) => res.json())
    );
  }

  set(data: any) {
    super.next(
      this.http.post('https://jsonplaceholder.typicode.com/comments', data)
        .map((res: any) => res.json())
    );
  }
}  
