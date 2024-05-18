import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor(private http: HttpClient) {}

  private textSubject = new BehaviorSubject<string>('');
  text$: Observable<string> = this.textSubject.asObservable();

  setText(text: string): void {
    this.textSubject.next(text);
  }

  private imageSubject = new BehaviorSubject<string | ArrayBuffer | null>(null);
  image$ = this.imageSubject.asObservable();

  sendText(text: string): void {
    this.textSubject.next(text);
  }

  sendImage(image: string | ArrayBuffer | null): void {
    this.imageSubject.next(image);
  }
}