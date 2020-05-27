import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolsComponent } from './vols.component';

describe('VolsComponent', () => {
  let component: VolsComponent;
  let fixture: ComponentFixture<VolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
