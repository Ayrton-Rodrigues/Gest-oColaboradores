import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColaboratorComponent } from './list-colaborator.component';

describe('ListColaboratorComponent', () => {
  let component: ListColaboratorComponent;
  let fixture: ComponentFixture<ListColaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
