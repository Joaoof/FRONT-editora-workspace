import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCatalogoComponent } from './session-catalogo.component';

describe('SessionCatalogoComponent', () => {
  let component: SessionCatalogoComponent;
  let fixture: ComponentFixture<SessionCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionCatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
