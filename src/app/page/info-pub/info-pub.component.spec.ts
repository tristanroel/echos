import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPubComponent } from './info-pub.component';

describe('InfoPubComponent', () => {
  let component: InfoPubComponent;
  let fixture: ComponentFixture<InfoPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
