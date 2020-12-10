import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltInfoVacinasPage } from './alt-info-vacinas.page';

describe('AltInfoVacinasPage', () => {
  let component: AltInfoVacinasPage;
  let fixture: ComponentFixture<AltInfoVacinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltInfoVacinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltInfoVacinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
