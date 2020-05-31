import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutcbPage } from './ajoutcb.page';

describe('AjoutcbPage', () => {
  let component: AjoutcbPage;
  let fixture: ComponentFixture<AjoutcbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutcbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
