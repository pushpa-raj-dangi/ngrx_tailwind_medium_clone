import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../feed/services/utils.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class PaginationComponent implements OnInit {
  @Input() total = 0;
  @Input() limit = 20;
  @Input() currentPage = 1;
  @Input() url = '';
  pageCount: number = 1;
  pages: number[] = [];
  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.pageCount = Math.ceil(this.total / this.limit);
    this.pages =
      this.pageCount > 0 ? this.utilsService.range(1, this.pageCount) : [];
  }
}
