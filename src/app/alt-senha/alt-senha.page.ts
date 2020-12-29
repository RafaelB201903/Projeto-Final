import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-alt-senha',
  templateUrl: './alt-senha.page.html',
  styleUrls: ['./alt-senha.page.scss'],
})
export class AltSenhaPage implements OnInit {

  constructor(private auth : AngularFireAuth) { 
  
  }

  ngOnInit() {
  }

 
 redefinirSenha(){
 
 }


}
