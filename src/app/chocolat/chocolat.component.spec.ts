import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatComponent } from './chocolat.component';

describe('ChocolatComponent', () => {
  let component: ChocolatComponent;
  let fixture: ComponentFixture<ChocolatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
