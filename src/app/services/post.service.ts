import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TextData {
  name: string;
  type: string;
  bold: boolean;
  italic: boolean;
  dropdownValue: string; 

}

interface ImageData {
  name: string;
  type: string;
}


interface ApiRequest {
  textArray: TextData[];
  imageArray: ImageData[];
  
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://pusulaweb.com.tr/api/editor';

  constructor(private http: HttpClient) {}

  postData(textArray: TextData[], imageArray: ImageData[]): Observable<any> {
    const requestBody: ApiRequest = {
      textArray,
      imageArray,
    };
    return this.http.post(this.apiUrl, requestBody);
  }
}