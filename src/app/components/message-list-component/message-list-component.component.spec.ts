import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponentComponent } from './message-list-component.component';

describe('MessageListComponentComponent', () => {
  let component: MessageListComponentComponent;
  let fixture: ComponentFixture<MessageListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
