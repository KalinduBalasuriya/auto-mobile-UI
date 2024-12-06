import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCarComponentComponent } from './add-new-car-component.component';

describe('AddNewCarComponentComponent', () => {
  let component: AddNewCarComponentComponent;
  let fixture: ComponentFixture<AddNewCarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
