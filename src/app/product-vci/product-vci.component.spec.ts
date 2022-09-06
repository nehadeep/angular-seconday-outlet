import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVciComponent } from './product-vci.component';

describe('ProductVciComponent', () => {
  let component: ProductVciComponent;
  let fixture: ComponentFixture<ProductVciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
