import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
    providedIn: 'root'
})

export class CookiesService {
    constructor(private cookieService: CookieService) { }

    getCookie(key: string) {
        return this.cookieService.get(key);
    }

    setCookie(key: string, value: string, days: number = 1) {
      this.cookieService.put(key, value, { expires: new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * days)) });
    }

    deleteCookie(key: string) {
        this.cookieService.remove(key);
    }
}
