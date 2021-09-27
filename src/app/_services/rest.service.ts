import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  async get(subroute:string): Promise<any>{
    const data:any = await this.http.get(`${API_URL}/${subroute}`).toPromise();
    console.log('The data retreived from the request: ', data);
    return data;
  }

}
