import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddImagemPetPage } from './add-imagem-pet.page';

describe('AddImagemPetPage', () => {
  let component: AddImagemPetPage;
  let fixture: ComponentFixture<AddImagemPetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImagemPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddImagemPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
