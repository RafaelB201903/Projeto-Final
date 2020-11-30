import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SairClientePage } from './sair-cliente.page';

describe('SairClientePage', () => {
  let component: SairClientePage;
  let fixture: ComponentFixture<SairClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SairClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SairClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
