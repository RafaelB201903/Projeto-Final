import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltInfoPetPage } from './alt-info-pet.page';

describe('AltInfoPetPage', () => {
  let component: AltInfoPetPage;
  let fixture: ComponentFixture<AltInfoPetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltInfoPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltInfoPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
