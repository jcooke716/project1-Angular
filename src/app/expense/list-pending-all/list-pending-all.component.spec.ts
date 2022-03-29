import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendingAllComponent } from './list-pending-all.component';

describe('ListPendingAllComponent', () => {
  let component: ListPendingAllComponent;
  let fixture: ComponentFixture<ListPendingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendingAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPendingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
