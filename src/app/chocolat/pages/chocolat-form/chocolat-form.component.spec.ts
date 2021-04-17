import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatFormComponent } from './chocolat-form.component';

describe('ChocolatFormComponent', () => {
  let component: ChocolatFormComponent;
  let fixture: ComponentFixture<ChocolatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
