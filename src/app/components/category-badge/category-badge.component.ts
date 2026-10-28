import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-badge',
  standalone: true,
  imports: [],
  templateUrl: './category-badge.component.html',
  styleUrl: './category-badge.component.scss'
})
export class CategoryBadgeComponent {

  @Input({ required: true })
  categoria!: string;

}