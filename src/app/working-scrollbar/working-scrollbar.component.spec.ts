import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingScrollbarComponent } from './working-scrollbar.component';

describe('WorkingScrollbarComponent', () => {
  let component: WorkingScrollbarComponent;
  let fixture: ComponentFixture<WorkingScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
