import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BilletComponent } from './billet.component';

describe('BilletComponent', () => {
  let component: BilletComponent;
  let fixture: ComponentFixture<BilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilletComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
