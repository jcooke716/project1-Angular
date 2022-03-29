import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResolvedAllComponent } from './list-resolved-all.component';

describe('ListResolvedAllComponent', () => {
  let component: ListResolvedAllComponent;
  let fixture: ComponentFixture<ListResolvedAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResolvedAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResolvedAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
