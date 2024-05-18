import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { LeftSideComponent } from '../left-side/left-side.component';
import { TextService } from '../../services/text.service';
import { PostService } from '../../services/post.service';
import { HttpClientModule } from '@angular/common/http';


interface DropdownOge { 
  value: string;
  text: string;
}

@Component({
  selector: 'app-right-side',
  standalone: true,
  imports: [CommonModule,
    FormsModule,LeftSideComponent,HttpClientModule ],
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'] 
})
export class RightSideComponent implements OnInit {
  text: string = '';

  constructor(private textService: TextService, private postService: PostService) {}
  fontSize: number = 16;
  @Output() fontSizeChange = new EventEmitter<number>();
  @Output() boldToggle = new EventEmitter<boolean>();
  @Output() italicToggle = new EventEmitter<boolean>();


  isBold: boolean = false;
  isItalic: boolean = false
  selectedImage: string | ArrayBuffer | null = null;
  imageName: string = '';
  selectedDropdownValue: string = '';


  ngOnInit(): void {    
    this.textService.text$.subscribe(text => {
      this.text = text;
      console.log(this.text= text);
    });
  }

  sendData(): void {    
    const textArray = [
      {
        name: this.text,
        type: 'text',
        bold: this.isBold,
        italic: this.isItalic,
        font_size: this.fontSize,
        dropdownValue : this.selectedDropdownValue
      }
    ];
    const imageArray = [
      {
        name: this.imageName,
        type: 'image',
      }
    ];

    this.postService.postData(textArray, imageArray).subscribe(response => {
    }, error => {
      console.error('API Error:', error);
    });
  }

  sendImage(): void {
    if (this.selectedImage) {
      this.textService.sendImage(this.selectedImage);
    }
  }


  selectedOption: string = 'image';
  dropdownOgeList: DropdownOge[] = [
    { value: "a1", text: "A1" },
    { value: "a2", text: "A2" },
    { value: "a3", text: "A3" },
    { value: "a4", text: "A4" },
    { value: "a5", text: "A5" },
  ];

  selectText() {
    this.selectedOption = 'text';
  }

  selectImage() {
    this.selectedOption = 'image';
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.textService.sendImage(this.selectedImage); 
      };
      reader.readAsDataURL(input.files[0]);
    }
  }


  toggleBold() {
    this.isBold = !this.isBold;
    this.boldToggle.emit(this.isBold);    
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
    this.italicToggle.emit(this.isItalic);
  }

  changeFontSize(event: any) {
    const size = parseInt(event.target.value, 10);
    if (!isNaN(size)) {
      this.fontSize = size;
      this.fontSizeChange.emit(this.fontSize);
    }
  }
}
