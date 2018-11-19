import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailGuardGuard } from './product-detail-guard.guard';

describe('ProductDetailGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailGuardGuard]
    });
  });

  it('should ...', inject([ProductDetailGuardGuard], (guard: ProductDetailGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
