import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicialClientePage } from './inicial-cliente.page';

describe('InicialClientePage', () => {
  let component: InicialClientePage;
  let fixture: ComponentFixture<InicialClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicialClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
