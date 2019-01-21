import { TestBed } from '@angular/core/testing';

import { IonicThemeService } from './ionic-theme.service';

describe('IonicThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicThemeService = TestBed.get(IonicThemeService);
    expect(service).toBeTruthy();
  });
});
