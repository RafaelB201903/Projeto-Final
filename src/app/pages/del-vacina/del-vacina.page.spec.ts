import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DelVacinaPage } from './del-vacina.page';

describe('DelVacinaPage', () => {
  let component: DelVacinaPage;
  let fixture: ComponentFixture<DelVacinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelVacinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DelVacinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
