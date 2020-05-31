import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartesbancairePage } from './cartesbancaire.page';

describe('CartesbancairePage', () => {
  let component: CartesbancairePage;
  let fixture: ComponentFixture<CartesbancairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartesbancairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartesbancairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
