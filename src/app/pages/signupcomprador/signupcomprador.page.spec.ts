import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupcompradorPage } from './signupcomprador.page';

describe('SignupcompradorPage', () => {
  let component: SignupcompradorPage;
  let fixture: ComponentFixture<SignupcompradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupcompradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupcompradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
