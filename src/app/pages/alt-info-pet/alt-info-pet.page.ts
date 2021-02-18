import { PetService } from './../../services/pet.service';
import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Pet } from 'src/app/model/pet';

@Component({
  selector: 'app-alt-info-pet',
  templateUrl: './alt-info-pet.page.html',
  styleUrls: ['./alt-info-pet.page.scss'],
})
export class AltInfoPetPage implements OnInit {

  formGroup: FormGroup;
  pet:  Pet = new Pet();

  constructor(private petservice : PetService,
    private route: ActivatedRoute,//para capturar o id daquela rota lá n url
    private navCtrl : NavController,
    private formBuilder : FormBuilder,
    private template : TemplateService) {
      this.iniciarForm();
     }

  ngOnInit() {

      //primeiro vou capturar com o route
      //this.route.paramMap.subscribe => vai tentar capturar alguma coisa
      //que sera a url lá de cima e no caso eu quero q capture o id da url

      this.route.paramMap.subscribe(url=>{

        let id = url.get('id');
      console.log(id);

  
      this.petservice.buscaPorId(id).subscribe(response=>{
      this.pet = response;

      console.log(this.pet);


      this.iniciarForm();
     
      })

    })

  }


  atualizar() {
    //template de carregamento
    this.template.loading.then(load=>{

      load.present();//abre janela no inicio do carregamento

      //quando eu chamo o formGroup.value eles chamam todos esses dados lá de cima
      this.petservice.atualizar(this.formGroup.value).subscribe(response => {
        
        console.log("Atualizado com sucesso");

        load.dismiss();//janelinha de carregamento
        this.template.myAlert("Alteração feita com sucesso!");//response lá do service
        //
        this.navCtrl.back();
        
      },erro => {
        console.log("Erro")

        load.dismiss();
        this.template.myAlert("Erro ao Alterar");
      })

    })
  }
  

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica
      id : [this.pet.id],
      nomedopet: [this.pet.nomedopet],
      raca: [this.pet.raca],
      especie: [this.pet.especie],
      cor: [this.pet.cor],
      sexo: [this.pet.sexo],
      datadenasc:[this.pet.datadenasc],
      tutor: [this.pet.tutor],
      endereco: [this.pet.endereco],
      cidade: [this.pet.cidade],
      estado: [this.pet.estado],
      telefone: [this.pet.telefone],
      celular: [this.pet.celular],
    })
  }
}

