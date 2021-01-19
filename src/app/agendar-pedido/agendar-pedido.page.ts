import { PetshopService } from './../services/petshop.service';
import { PetService } from 'src/app/services/pet.service';
import { PedidoService } from './../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TemplateService } from '../services/template.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../model/pet';
import { Petshop } from '../model/petshop';

@Component({
  selector: 'app-agendar-pedido',
  templateUrl: './agendar-pedido.page.html',
  styleUrls: ['./agendar-pedido.page.scss'],
})
export class AgendarPedidoPage implements OnInit {

  petshop : Petshop = new Petshop();
  listaPet : Pet[] = [];
  formGroup: FormGroup;
  idpetshop: string ="";
  idcliente: string ="";

  status: string = "novo";


  horario_coleta :string = "";
  horario_entrega : string = "";

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private pedidoServ: PedidoService,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    private petservice : PetService,
    private petshopservice : PetshopService) 
    {
      
      this.auth.currentUser.then(response=>{
        this.idcliente=response.uid;
        console.log(this.idcliente)
        this.petservice.listaDePets(this.idcliente).subscribe(response=>{
          console.log(response);
          this.listaPet = response;
        })

        this.iniciarForm();
      })
      this.iniciarForm();

     }

     ngOnInit() {

      this.route.paramMap.subscribe(url=>{
  
        let id = url.get('id');
        
  
        this.idpetshop = id;
        this.petshopservice.petshopsPorId(this.idpetshop).subscribe(response=>{
          this.petshop=response;
        })
      })
      this.iniciarForm();
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica
      idcliente: [this.idcliente],
      idpetshop: [this.idpetshop],
      status: [this.status],
      servico:[],
      pet:[],
      data_sugerido:[],
      horario_sugerido:[],
      horario_coleta : [this.horario_coleta],
      horario_entrega: [this.horario_entrega],
     
    })//NAO ESTOU FAZENDO VALIDAÇÃO OU SEJA SE ESQUECERMOS UM 
    //REGISTRO ELE N DARÁ ERRO (O FIREBASE)
  }


  cadastrar() {
    //template de carregamento
      //abre janela no inicio do carregamento
      //quando eu chamo o formGroup.value eles chamam todos esses dados lá de cima
      this.pedidoServ.cadastrarPedido(this.formGroup.value).subscribe(response => {
        
        console.log("Cadastrado com sucesso");

        ;//janelinha de carregamento
        this.template.myAlert(response);//response lá do service
        //

        
      },erro => {
        console.log("Erro")

      
        this.template.myAlert("Erro ao Cadastrar");
      })

    
  }

  /*atualizar(){
    
    //ver dps no vídeo
    this..then(response=>{ // auth.currentUser -> Obten dados do usuario
      // envio uid -> idUsuário
      // this.formGroup.value -> Dados preenchidos nos campos
      this.clienteServ.atualizaPerfil(response.idpedido,this.formGroup.value).subscribe(response=>{
        console.log(response);
        console.log(this.formGroup.value)
      })
    })
  }*/

}

