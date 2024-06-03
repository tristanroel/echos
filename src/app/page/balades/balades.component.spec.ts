import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladesComponent } from './balades.component';

describe('BaladesComponent', () => {
  let component: BaladesComponent;
  let fixture: ComponentFixture<BaladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaladesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
