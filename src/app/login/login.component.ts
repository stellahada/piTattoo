import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importe o módulo HttpClientModule
import { API_URL } from '../../app/api/constants'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ FormsModule, HttpClientModule],
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  logar() {
    const body = {
      cpf: this.cpf,
      senha: this.senha
    };
  
    console.log("Enviando dados:", body); // Verifique os dados que estão sendo enviados
  
    this.http.post('http://localhost:8080/login/l', body, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (resp: any) => {
        console.log("Resposta recebida:", resp);
        if (resp) {
          this.router.navigate(['/about']);
        } else {
          alert("Erro ao fazer login, por favor tente novamente.");
        }
      },
      error: (err: any) => {
        console.error("Erro na requisição:", err);
        alert(err.error?.erro || "Erro ao fazer login, por favor tente novamente.");
      }
    });
  }
  
}
