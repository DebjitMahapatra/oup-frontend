import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  constructor() { }

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
  
    req.clone({
      setHeaders :{
        'Access-Control-Allow-Origin': 'Eknahe',
        'Authorization' : `Bearer ${this.getToken()}`
      }
    })
    return next.handle(req);
  }

  private getToken(){
    let retVal : string;
    if("tokenId" in localStorage){
         retVal = localStorage.getItem("tokenId");
    }
    else{
        retVal = null;
    }
    return retVal;
  }

}
