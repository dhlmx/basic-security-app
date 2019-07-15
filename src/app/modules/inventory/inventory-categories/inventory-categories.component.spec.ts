import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCategoriesComponent } from './inventory-categories.component';

describe('InventoryCategoriesComponent', () => {
  let component: InventoryCategoriesComponent;
  let fixture: ComponentFixture<InventoryCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
