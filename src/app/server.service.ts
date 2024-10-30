import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}


//Observable é um atributo do rxjs
  public postUsuario(code: any): Observable<any> {
    const url = 'http://localhost:8080/angular';
    const params = new HttpParams()
    .set('code', code);  
    const options = {Headers: new HttpHeaders(), responseType: 'text' as 'json'}
    return this.http.post<any>(url, params, options);
  }

  public postCurriculo(curriculo: any): Observable<any> {
    const url = 'http://localhost:8080/cadastrarCurriculo'; // URL do seu endpoint
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };
    return this.http.post<any>(url, curriculo, options);
  }


  public getTodosUsuarios(): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.get<any>(url);
  }

  public listarCurriculos(): Observable<any> {
    const url = 'http://localhost:8080/listarCurriculos'; // Endpoint para listar currículos
    return this.http.get<any>(url);
  }


   // Novo método para listar postagens
   public listarPostagens(): Observable<any> {
    const url = 'http://localhost:8080/listarPostagens'; // Ajuste para o endpoint correto
    return this.http.get<any>(url);
  }

  // Novo método para cadastrar postagens
  public postPostagem(postagem: any): Observable<any> {
    const url = 'http://localhost:8080/cadastrarPostagem'; // Ajuste para o endpoint correto
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'
    };
    return this.http.post<any>(url, postagem, options);
  }
}
