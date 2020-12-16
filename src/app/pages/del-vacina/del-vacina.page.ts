import { Vacina } from 'src/app/model/vacina';
import { VacinaService } from './../../services/vacina.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-del-vacina',
  templateUrl: './del-vacina.page.html',
  styleUrls: ['./del-vacina.page.scss'],
})
export class DelVacinaPage implements OnInit {

  
  vacina : Vacina = new Vacina();

  constructor(private VacinaService : VacinaService,
    private route: ActivatedRoute,//para capturar o id daquela rota lá n url
    private navCtrl : NavController,
    private template : TemplateService) { }

  ngOnInit() {
    //primeiro vou capturar com o route
    //this.route.paramMap.subscribe => vai tentar capturar alguma coisa
    //que sera a url lá de cima e no caso eu quero q capture o id da url
    this.route.paramMap.subscribe(url=>{
      //variavel id que vai pegar o id da url
      let id = url.get('id');
      console.log(id);

      //uma vez que eu tenho o id vou fazer uma consulta
      //no servidor utilizando esse id
      //buscaPorId(id) => vou enviar o id
      this.VacinaService.buscaPorId(id).subscribe(response=>{
        
        //para eu armazenar esse cliente primeiro tenho que
        //declarar ele como variavel
        this.vacina = response;//response vai ser o cliente
        //os dados que receber no response vou colocar no cliente
        console.log(this.vacina);
      
      })

    })

  }//ESSE CODIGO VAI LA N BANCO E PEGA O ID

  excluir() {
    //template de carregamento
    this.template.loading.then(load => {

      load.present();//abre janela no inicio do carregamento

      //quando eu chamo o formGroup.value eles chamam todos esses dados lá de cima
      this.VacinaService.excluirVacina(this.vacina).subscribe(response => {



        load.dismiss();//janelinha de carregamento

        //fecha janelinha

        this.navCtrl.navigateForward(['/tabs/info-vacinas']);
      }, erro => {


        load.dismiss();
        this.template.myAlert("Erro ao Excluir");
      })

    })
  }

}
