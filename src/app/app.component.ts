import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { PrintEditorComponent } from './components/print-editor/print-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LeftSideComponent,RightSideComponent,PrintEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'baski-editoru';
}
