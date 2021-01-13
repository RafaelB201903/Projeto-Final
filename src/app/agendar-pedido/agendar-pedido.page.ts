import { PedidoService } from './../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TemplateService } from '../services/template.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendar-pedido',
  templateUrl: './agendar-pedido.page.html',
  styleUrls: ['./agendar-pedido.page.scss'],
})
export class AgendarPedidoPage implements OnInit {

  formGroup: FormGroup;
  idpetshop: string ="";
  idcliente: string ="";

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private pedidoServ: PedidoService,
    private auth : AngularFireAuth,
    private route: ActivatedRoute) 
    {
      
      this.auth.currentUser.then(response=>{
        this.idcliente=response.uid;
        console.log(this.idcliente)
        this.iniciarForm();
      })
      this.iniciarForm();

     }

     ngOnInit() {

      this.route.paramMap.subscribe(url=>{
  
        let id = url.get('id');
        
  
        this.idpetshop = id;
        console.log(this.idpetshop);
      })
      this.iniciarForm();
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica
      idcliente: [this.idcliente],
      idpetshop: [this.idpetshop],
      servico:[],
      pet:[],
      data:[],
      horario:[],
     
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

}

