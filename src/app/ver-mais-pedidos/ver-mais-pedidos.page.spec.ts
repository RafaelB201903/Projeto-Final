import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMaisPedidosPage } from './ver-mais-pedidos.page';

describe('VerMaisPedidosPage', () => {
  let component: VerMaisPedidosPage;
  let fixture: ComponentFixture<VerMaisPedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMaisPedidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMaisPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
