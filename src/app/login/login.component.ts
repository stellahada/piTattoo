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
  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  logar(): void {
    const body = { email: this.email, senha: this.senha };

    this.http.post(`${API_URL}/login`, body).subscribe({
      next: (resp: any) => {
        if (resp && resp.token) {
          localStorage.setItem('TOKEN', resp.token);
          this.router.navigate(['/estoque']);
        } else {
          console.error('A resposta não possui dados.', resp);
          alert('Erro ao fazer login, por favor tente novamente.');
        }
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
        alert(err.error ? err.error.erro : 'Erro ao fazer login, por favor tente novamente.');
      }
    });
  }
}
