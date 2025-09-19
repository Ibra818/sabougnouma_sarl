import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  
  apiUrl= 'https://phplaravel-1249520-5861242.cloudwaysapps.com/';
  // apiUrl= 'http://localhost:8000/api/';

  headers= new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Accept': 'application/json'
  });

  constructor(private http: HttpClient) { }

  // Send Email

  sendEmail(data:any){

    this.http.post(this.apiUrl + 'contact', data, {headers: this.headers}).subscribe( response =>{
      console.log(
        {
          'message': 'mail envoyé avec success',
          'response': response
        });
    }, errors => {
      console.log(
        {
          'message': 'L\'envoie du mail a echoué!',
          'response': errors
        }
      )
    });
  }

}
