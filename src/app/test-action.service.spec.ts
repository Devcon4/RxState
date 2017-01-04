/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestAction } from './test-action.service';

describe('TestActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestAction]
    });
  });

  it('should ...', inject([TestAction], (service: TestAction) => {
    expect(service).toBeTruthy();
  }));
});
