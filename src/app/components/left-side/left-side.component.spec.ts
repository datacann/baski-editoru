import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideComponent } from './left-side.component';


describe('LeftSideComponent', () => {
  let component: LeftSideComponent;
  let fixture: ComponentFixture<LeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should emit textChange event when text is updated', () => {
    spyOn(component.textChange, 'emit');
    component.updateText('New Text');
    expect(component.textChange.emit).toHaveBeenCalledWith('New Text');
  });

});
