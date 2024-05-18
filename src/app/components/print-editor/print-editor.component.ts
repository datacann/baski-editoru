import { Component, Input } from '@angular/core';
import { LeftSideComponent } from '../left-side/left-side.component';
import { RightSideComponent } from '../right-side/right-side.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-print-editor',
  standalone: true,
  imports: [LeftSideComponent,RightSideComponent,CommonModule,HttpClientModule],
  templateUrl: './print-editor.component.html',
  styleUrl: './print-editor.component.css'
})
export class PrintEditorComponent {
  constructor() { }

  fontSize: number = 12
  isBold: boolean = false;
  isItalic: boolean = false;


  onBoldToggle(isBold: boolean) {
    this.isBold = isBold;
  }

  onItalicToggle(isItalic: boolean) {
    this.isItalic = isItalic;
  }


  UpdatedFontSize(): number {
    return this.fontSize;
  }

  onFontSizeChange(newSize: number) {
    this.fontSize = newSize;
  }

}
