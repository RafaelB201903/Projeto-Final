import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, MenuController } from '@ionic/angular';
import { TemplateService } from '../services/template.service'

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private auth : AngularFireAuth,
    private navCtrl : NavController,
    private menuCtrl : MenuController,
    private template : TemplateService) 
    {
      this.iniciarForm();
     }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  autenticar() { 

    let user = this.formGroup.controls['username'].value;
    let pass = this.formGroup.controls['password'].value;

    this.template.loading.then(load=>{
      this.auth.signInWithEmailAndPassword(user,pass).then(data=>{
        load.dismiss();
        this.menuCtrl.enable(true);
        this.navCtrl.navigateRoot(['/localizar-petshops']);
      }).catch(data=>{
        load.dismiss();
        this.template.myAlert("Erro ao autenticar");
      });
    })
  }

  iniciarForm(){
    this.formGroup = this.formBuilder.group({
      username : ['',[Validators.email] ],
      password : ['',[Validators.required, Validators.minLength(13), Validators.maxLength(16)]]
    })
  }

}
