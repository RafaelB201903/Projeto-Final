import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController, NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {

  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  constructor(public firebaseauth: AngularFireAuth,
    public toastCtrl : ToastController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
