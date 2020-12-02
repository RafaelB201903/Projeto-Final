import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoVacinasPage } from './info-vacinas.page';

describe('InfoVacinasPage', () => {
  let component: InfoVacinasPage;
  let fixture: ComponentFixture<InfoVacinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVacinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoVacinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
