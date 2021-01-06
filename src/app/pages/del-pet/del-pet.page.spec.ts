import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DelPetPage } from './del-pet.page';

describe('DelPetPage', () => {
  let component: DelPetPage;
  let fixture: ComponentFixture<DelPetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DelPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
