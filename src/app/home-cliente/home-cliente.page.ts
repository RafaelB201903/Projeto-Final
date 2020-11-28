import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPage() {
    this.router.navigate(['/pedido-novo'])
  }

}
