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
      console.log(id)

     this.vacinaService.buscaPorId(id).subscribe(response=>{
       this.vacina = response;//acoma ele busca info por id
       console.log(this.vacina);
       this.iniciarForm();
       //inicio o form com as info nos inputs
     })
      
    })
    
  }

  atualizar(){
    this.vacinaService.atualizarVacina(this.formGroup.value).subscribe(response => {
        
      console.log("Atualizado com sucesso");

      ;//janelinha de carregamento
      this.template.myAlert(response);//response lá do service
      //
      this.navCtrl.navigateForward(['/info-vacinas'])
      
    },erro => {
      console.log("Erro")

    
      this.template.myAlert("Erro ao Cadastrar");
    })


  }

  iniciarForm() {//os dados vão chegar do banco aqui
    this.formGroup = this.formBuilder.group({

      id: [this.vacina.id],
      medicamento: [this.vacina.medicamento],
      data: [this.vacina.data],
      proximadose: [this.vacina.proximadose],
      
      
    })
  }
}

