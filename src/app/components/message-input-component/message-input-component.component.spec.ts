import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputComponentComponent } from './message-input-component.component';

describe('MessageInputComponentComponent', () => {
  let component: MessageInputComponentComponent;
  let fixture: ComponentFixture<MessageInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageInputComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
