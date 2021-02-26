import { TemplateService } from 'src/app/services/template.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-alt-senha',
  templateUrl: './alt-senha.page.html',
  styleUrls: ['./alt-senha.page.scss'],
})
export class AltSenhaPage implements OnInit {

  formGroup: FormGroup;
  emailAddress: any;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    public template : TemplateService
    
  ) { 
    this.auth.currentUser.then(response=>{
      this.emailAddress = response.email;
      
    })
  }


  ngOnInit() {
    
    
  }
  

  recuperarSenha() {

    
     
      var email = this.auth
      console.log(email)
      
      console.log(this.emailAddress)

      email.sendPasswordResetEmail(this.emailAddress).then(function () {

       
        
        
      }).catch(function (error) {
     
      
     

      });
    
    

  }
 

  }

