import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CookiesService } from "./cookies.service";
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: "root",
})

export class CommonService {

  constructor(
    private cookieService: CookiesService,
  ){}

  getUserData() {
    if(this.cookieService.getCookie('authentication') != null){
    const jwt = this.cookieService.getCookie('authentication') || '';
    return jwt_decode(jwt);
    }
    return null;
  }

}
