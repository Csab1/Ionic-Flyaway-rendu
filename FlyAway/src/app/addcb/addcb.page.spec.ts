import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcbPage } from './addcb.page';

describe('AddcbPage', () => {
  let component: AddcbPage;
  let fixture: ComponentFixture<AddcbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
