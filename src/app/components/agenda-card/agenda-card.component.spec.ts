import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaCard } from './agenda-card.component';

describe('AgendaCard', () => {
  let component: AgendaCard;
  let fixture: ComponentFixture<AgendaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
