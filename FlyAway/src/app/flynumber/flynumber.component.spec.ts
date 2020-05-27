import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlynumberComponent } from './flynumber.component';

describe('FlynumberComponent', () => {
  let component: FlynumberComponent;
  let fixture: ComponentFixture<FlynumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlynumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlynumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
