import { Component,Input,OnInit,Output, EventEmitter  } from '@angular/core';
import { RightSideComponent } from '../right-side/right-side.component';
import { CommonModule } from '@angular/common';
import { TextService } from '../../services/text.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [RightSideComponent,CommonModule,FormsModule],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css'
})
export class LeftSideComponent implements OnInit {
  constructor(private textService: TextService) {}


  @Input() fontSize: number = 12;
  @Input() isBold: boolean = false;
  @Input() isItalic: boolean = false;
  @Output() textChange = new EventEmitter<string>();
  
  text: string = '';
  rows: any[] = Array(30); 
  columns: any[] = Array(30); 
  selectedImage: string | ArrayBuffer | null = null;



  
  updateText(newText: string) {
    this.text = newText;
    this.textChange.emit(newText);
  }

  sendTextToRightSide() {
    this.textService.setText(this.text); 
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
  }

  ngOnInit() {
    this.textService.image$.subscribe(image => {
      this.selectedImage = image;
    });
  }


}