import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoPetPage } from './info-pet.page';

describe('InfoPetPage', () => {
  let component: InfoPetPage;
  let fixture: ComponentFixture<InfoPetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
