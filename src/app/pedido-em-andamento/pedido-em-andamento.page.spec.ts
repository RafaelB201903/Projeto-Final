import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoEmAndamentoPage } from './pedido-em-andamento.page';

describe('PedidoEmAndamentoPage', () => {
  let component: PedidoEmAndamentoPage;
  let fixture: ComponentFixture<PedidoEmAndamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoEmAndamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoEmAndamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
