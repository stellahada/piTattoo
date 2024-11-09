import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_URL } from '../../app/api/constants'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  async logar() {
    const body = {
      cpf: this.cpf,
      senha: this.senha
    };

    try {
      const resp: any = await this.http.post('http://localhost:3010/login', body).toPromise();
      if (resp && resp.token) {
        localStorage.setItem('TOKEN', resp.token);
        this.router.navigate(['/home']);
      } else {
        console.error("A resposta não possui dados.", resp);
        alert("Erro ao fazer login, por favor tente novamente.");
      }
    } catch (err: any) {
      console.error("Erro na requisição:", err);
      alert(err.error?.erro || "Erro ao fazer login, por favor tente novamente.");
    }
  }
}
