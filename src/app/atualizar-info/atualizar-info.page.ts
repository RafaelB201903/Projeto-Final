import { NavController } from '@ionic/angular';
import { TemplateService } from 'src/app/services/template.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-atualizar-info',
  templateUrl: './atualizar-info.page.html',
  styleUrls: ['./atualizar-info.page.scss'],
})
export class AtualizarInfoPage implements OnInit {

  formGroup: FormGroup;
  perfil : Cliente = new Cliente(); // Declarar a classe onde se encontra dados do perfil
  
  constructor(private formBuilder : FormBuilder, 
    private clienteServ : ClienteService,
    private auth : AngularFireAuth,
    private template : TemplateService,
    private navCtrl : NavController) { // AngularFireAuth -> pegar dados do usuario logado
    
      this.iniciarForm(); // obrigatório inicializar o formulário
    
      this.auth.authState.subscribe(response=>{
        console.log(response.uid)
      })

      this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
        
        


        this.clienteServ.buscaPerfilPorId(response.uid).subscribe(response=>{
          // se houver o perfil, colocar os dados para a variavel perfil
          this.perfil = response; // dados preenchidos
          this.iniciarForm(); // atualizar os dados do formulário
        }

        )
      })

  }

  ngOnInit() {
  }

  // vincular dados da variavel perfil
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [this.perfil.nome],
      cpf: [this.perfil.cpf],
      telefone: [this.perfil.telefone],
      complemento: [this.perfil.complemento],
      cep: [this.perfil.cep],
      cidade: [this.perfil.cidade],
      bairro: [this.perfil.bairro],
      endereco: [this.perfil.endereco],
      ncasa: [this.perfil.ncasa]
    })
  }

  atualizar(){
    this.template.loading.then(load=>{
      load.present();
    
    this.auth.currentUser.then(response=>{ 
 
      this.clienteServ.atualizaPerfil(response.uid,this.formGroup.value).subscribe(response=>{
        console.log(response);
        console.log(this.formGroup.value)

        this.template.myAlert("Alteração feita com sucesso!");
        load.dismiss()
      }, erro => {

        this.template.myAlert("Erro ao alterar!");
        load.dismiss()
      })
    })
  })
  }

}
