import { NavController } from '@ionic/angular';
import { VacinaService } from './../../services/vacina.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-info-vacinas',
  templateUrl: './add-info-vacinas.page.html',
  styleUrls: ['./add-info-vacinas.page.scss'],
})
export class AddInfoVacinasPage implements OnInit {

  formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private VacinaService: VacinaService,
    private navCtrl : NavController) 
    {
      this.iniciarForm();
     }

  ngOnInit() {
    
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica
      
      medicamento: [],
      data: [],
      proximadose: [],
     
    })//NAO ESTOU FAZENDO VALIDAÇÃO OU SEJA SE ESQUECERMOS UM 
    //REGISTRO ELE N DARÁ ERRO (O FIREBASE)
  }


  
  cadastrar() {
    //template de carregamento
    

      //abre janela no inicio do carregamento

      //quando eu chamo o formGroup.value eles chamam todos esses dados lá de cima
      this.VacinaService.cadastrarVacina(this.formGroup.value).subscribe(response => {
        
        console.log("Cadastrado com sucesso");

        ;//janelinha de carregamento
        this.template.myAlert(response);//response lá do service
        //
        this.navCtrl.navigateBack(['/info-vacinas'])
        
      },erro => {
        console.log("Erro")

      
        this.template.myAlert("Erro ao Cadastrar");
      })

    
  }

 

}
