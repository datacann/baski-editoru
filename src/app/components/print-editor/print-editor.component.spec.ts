import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintEditorComponent } from './print-editor.component';

describe('PrintEditorComponent', () => {
  let component: PrintEditorComponent;
  let fixture: ComponentFixture<PrintEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
