import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaFilter } from './agenda-filter.component';

describe('AgendaFilter', () => {
  let component: AgendaFilter;
  let fixture: ComponentFixture<AgendaFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
