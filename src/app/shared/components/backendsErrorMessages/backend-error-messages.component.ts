import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorInterface } from '../../types/backendError.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-error-messages.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrorInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ');
      return `${name} ${messages}`;
    });
  }
}
