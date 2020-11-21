import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacinacaoPage } from './vacinacao.page';

describe('VacinacaoPage', () => {
  let component: VacinacaoPage;
  let fixture: ComponentFixture<VacinacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacinacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
