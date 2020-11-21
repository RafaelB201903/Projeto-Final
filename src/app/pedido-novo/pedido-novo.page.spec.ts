import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoNovoPage } from './pedido-novo.page';

describe('PedidoNovoPage', () => {
  let component: PedidoNovoPage;
  let fixture: ComponentFixture<PedidoNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
