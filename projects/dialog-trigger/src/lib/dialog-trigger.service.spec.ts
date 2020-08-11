import { TestBed } from '@angular/core/testing';

import { DialogTriggerService } from './dialog-trigger.service';

describe('DialogTriggerService', () => {
  let service: DialogTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
