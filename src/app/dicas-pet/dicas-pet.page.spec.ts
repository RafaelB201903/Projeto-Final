import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DicasPetPage } from './dicas-pet.page';

describe('DicasPetPage', () => {
  let component: DicasPetPage;
  let fixture: ComponentFixture<DicasPetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicasPetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicasPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
