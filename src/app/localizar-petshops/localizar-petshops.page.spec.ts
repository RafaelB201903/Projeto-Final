import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalizarPetshopsPage } from './localizar-petshops.page';

describe('LocalizarPetshopsPage', () => {
  let component: LocalizarPetshopsPage;
  let fixture: ComponentFixture<LocalizarPetshopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizarPetshopsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalizarPetshopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
