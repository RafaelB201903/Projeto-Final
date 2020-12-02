import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInfoVacinasPage } from './add-info-vacinas.page';

describe('AddInfoVacinasPage', () => {
  let component: AddInfoVacinasPage;
  let fixture: ComponentFixture<AddInfoVacinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInfoVacinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInfoVacinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
