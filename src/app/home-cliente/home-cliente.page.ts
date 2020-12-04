import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  constructor(private router: Router,
    private navCtrl : NavController,
    private auth: AngularFireAuth,
    private menuCtrl : MenuController) { }

  ngOnInit() {
    
  }

  goPagePedidoNovo() {
    this.router.navigate(['/pedido-novo'])
  }

  goPageCarteirinha() {
    this.router.navigate(['/pages/info-pet'])
  }



  
}
