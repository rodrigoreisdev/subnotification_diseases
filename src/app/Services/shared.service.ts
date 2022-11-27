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
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.urlAPI + '/User', data, { headers });
  }

  public Login(data:any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.urlAPI + '/User/Login', data, { headers });
  }

  public GetAllUsers() {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.urlAPI + '/User', { headers });
  }

  //ADMIN
  public LoginAdm(data:any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.urlAPI + '/Admin/Login', data, { headers });
  }

  //NEWS
  public InsertNews(data: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(this.urlAPI + '/Notice', data, { headers });
  }

  public GetAllNews() {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.urlAPI + '/Notice', { headers });
  }

  public GetNewsById(id: any) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get(this.urlAPI + '/Notice/' + id, { headers });
  }

}
