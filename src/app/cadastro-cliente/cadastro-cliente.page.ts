import { TemplateService } from 'src/app/services/template.service';
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
    public menuCtrl: MenuController,
    public template : TemplateService,
    ) {}

  ngOnInit() {
  }

  ionViewDidLoad(){
    this.menuCtrl.enable(false);
  }
  
  cadastrar() {
    this.template.loading.then(load=>{
      load.present();

    this.firebaseauth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=> {
        

        
        this.template.myAlert("Cadastrado com sucesso!");
        load.dismiss();

        this.navCtrl.navigateForward(['/login-cliente'])
      })
      .catch(()=> {
        this.template.myAlert("Erro ao cadastrar!");
        load.dismiss();
      })
    })
  }

 
  
}


