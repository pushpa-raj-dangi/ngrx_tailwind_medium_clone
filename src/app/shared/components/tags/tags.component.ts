import { Component, Input } from '@angular/core';
import { PopularTagType } from '../../types/popular-tag.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-tags',
  templateUrl: './tags.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TagsComponent {
  @Input() tags: PopularTagType[] = [];
}
