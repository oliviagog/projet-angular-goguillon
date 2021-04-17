import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricationFormComponent } from './fabrication-form.component';

describe('FabricationFormComponent', () => {
  let component: FabricationFormComponent;
  let fixture: ComponentFixture<FabricationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
