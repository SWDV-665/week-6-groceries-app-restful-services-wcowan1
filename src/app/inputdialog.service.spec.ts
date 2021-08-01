import { TestBed } from '@angular/core/testing';

import { InputdialogService } from './inputdialog.service';

describe('InputdialogService', () => {
  let service: InputdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
