import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.page.html',
  styleUrls: ['./perfil2.page.scss'],
})
export class Perfil2Page implements OnInit {

  formGroup: FormGroup;
  perfil : Cliente = new Cliente(); // Declarar a classe onde se encontra dados do perfil
  
  constructor(private formBuilder : FormBuilder, 
    private clienteServ : ClienteService,
    private auth : AngularFireAuth) { // AngularFireAuth -> pegar dados do usuario logado
    
      this.iniciarForm(); // obrigatório inicializar o formulário
    
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
      endereco: [this.perfil.endereco],
      email: [this.perfil.email],
      telefone: [this.perfil.telefone]
    })
  }

  atualizar(){
    
    this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario
      // envio uid -> idUsuário
      // this.formGroup.value -> Dados preenchidos nos campos
      this.clienteServ.atualizaPerfil(response.uid,this.formGroup.value).subscribe(response=>{
        console.log(response);
        console.log(this.formGroup.value  )
      })
    })
  }

}