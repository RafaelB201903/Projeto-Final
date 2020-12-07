import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController, NavParams, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {

  @ViewChild('usuario') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, 
    public firebaseauth : AngularFireAuth,
    public toastCtrl : ToastController,
    public menuCtrl: MenuController) {}

  ngOnInit() {
  }

  ionViewDidLoad(){
    this.menuCtrl.enable(false);
  }
  
  cadastrar() {
    this.firebaseauth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=> {
        this.msgSucesso();
      })
      .catch(()=> {
        this.msgErro();
      })
  }

  msgSucesso() {
    console.log('sucesso ao cadastrar!')
  }

  msgErro() {
   console.log('erro ao cadastrar!')
  }
  
}


