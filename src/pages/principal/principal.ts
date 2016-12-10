import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Principal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
  private usuario;
  private pesquisa;

  constructor(public navCtrl: NavController,  public http:Http) {
    this.usuario = [];
    this.pesquisa = '';
    this.listar();
  }

  ionViewDidLoad() {
    console.log('Bem vindo a area do usuario');
  }

  listar(){
    this.http.get('http://localhost:8100/userctrl/listar').map(res => res.json()).subscribe(data => {
      this.usuario = data;
    });
  }

  buscarNome(){
    console.log(this.pesquisa);
    this.http.get('http://localhost:8100/userctrl/buscarNome/'+this.pesquisa).map(res => res.json()).subscribe(data => {
      this.usuario = data;
    });
  }

   buscarCPF(){
    console.log(this.pesquisa);
    this.http.get('http://localhost:8100/userctrl/buscarCPF/'+this.pesquisa).map(res => res.json()).subscribe(data => {
      this.usuario = data;
    });
  }

   buscarEmail(){
    console.log(this.pesquisa);
    this.http.get('http://localhost:8100/userctrl/buscarEmail/'+this.pesquisa).map(res => res.json()).subscribe(data => {
    this.usuario = data;
    });
  }

}
