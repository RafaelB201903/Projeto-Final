import { FormGroup, FormBuilder } from '@angular/forms';
import { VacinaService } from './../../services/vacina.service';
import { Vacina } from './../../model/vacina';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-alt-info-vacinas',
  templateUrl: './alt-info-vacinas.page.html',
  styleUrls: ['./alt-info-vacinas.page.scss'],
})
export class AltInfoVacinasPage implements OnInit {

  formGroup : FormGroup;
  vacina : Vacina = new Vacina();
  idpet: string ="";
  
  constructor(private vacinaService : VacinaService,
    private navCtrl : NavController,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
    private template : TemplateService) {
      this.iniciarForm();//dados n chegaram
     }

  ngOnInit() {
    
    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      this.idpet = id;
      console.log(id)

     this.vacinaService.buscaPorId(id).subscribe(response=>{
       this.vacina = response;//acoma ele busca info por id
       console.log(this.vacina);
       this.vacina.id = id;
       this.iniciarForm();
       //inicio o form com as info nos inputs
     })
      
    })
    
  }

  atualizar(){
    this.vacinaService.atualizarVacina(this.vacina.id,this.formGroup.value).subscribe(response => {
        
      console.log("Atualizado com sucesso");

      ;//janelinha de carregamento
      this.template.myAlert("Alteração feita com sucesso!");//response lá do service
      //
      this.navCtrl.back();
      
    },erro => {
      console.log("Erro")

    
      this.template.myAlert("Erro ao alterar informação");
    })


  }

  iniciarForm() {//os dados vão chegar do banco aqui
    this.formGroup = this.formBuilder.group({

      idpet: [this.vacina.idpet],
      medicamento: [this.vacina.medicamento],
      data: [this.vacina.data],
      proximadose: [this.vacina.proximadose],
      
      
    })
  }
}

