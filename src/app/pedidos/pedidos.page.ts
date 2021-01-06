import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(private auth : AngularFireAuth) {
    this.auth.credential.subscribe(resp=>{
      console.log(resp);
    })
  }

  ngOnInit() {
  }

}
