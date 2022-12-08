import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})

export class SharedService {

  public urlAPI = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  // USER
  public InsertUser(data: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.post(this.urlAPI + '/User', data, { headers });
  }

  public Login(data:any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.post(this.urlAPI + '/User/Login', data, { headers });
  }

  public GetAllUsers() {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/User', { headers });
  }

  public GetUserById(id: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/User/' + id, { headers });
  }

  public UpdateUser(data: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.put(this.urlAPI + '/User', data, { headers });
  }

  //ADMIN
  public LoginAdm(data:any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.post(this.urlAPI + '/Admin/Login', data, { headers });
  }

  //NEWS
  public InsertNews(data: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.post(this.urlAPI + '/Notice', data, { headers });
  }

  public GetAllNews() {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Notice', { headers });
  }

  public GetNewsById(id: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Notice/' + id, { headers });
  }

  public GetNewsByCategory(id: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Notice/Category/' + id, { headers });
  }

  public DeleteNews(id: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.delete(this.urlAPI + '/Notice/' + id, { headers });
  }

  public GetAllNewsLimit() {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Notice/Limit/', { headers });
  }

  public GetAllNewsLimitByCategory(id: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Notice/Limit/' + id, { headers });
  }

  //COMMENTS
  public InsertComment(data: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.post(this.urlAPI + '/Comments', data, { headers });
  }

  public GetAllCommentsByNews(id: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Comments/' + id, { headers });
  }

  public GetAllComments() {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Comments', { headers });
  }

  public UpdateComment(id: string, status: boolean) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.put(this.urlAPI + '/Comments/' + id, status, { headers });
  }

  public GetCommentsByUserId(id: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Comments/User/' + id, { headers });
  }

  public GetAllCommentsLimit() {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Comments/Limit', { headers });
  }

  //CATEGORIES
  public InsertCategory(data: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.post(this.urlAPI + '/Category', data, { headers });
  }

  public GetAllCategories() {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Origin", "projetosdu.000webhostapp.com");
    return this.http.get(this.urlAPI + '/Category', { headers });
  }

}
