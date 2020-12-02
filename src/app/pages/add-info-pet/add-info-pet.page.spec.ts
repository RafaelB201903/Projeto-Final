import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInfoPetPage } from './add-info-pet.page';

describe('AddInfoPetPage', () => {
  let component: AddInfoPetPage;
  let fixture: ComponentFixture<AddInfoPetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInfoPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInfoPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
