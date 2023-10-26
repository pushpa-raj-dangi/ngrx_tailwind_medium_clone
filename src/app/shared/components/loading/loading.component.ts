import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-loading',
  template: `<div class="my-10">
    <div class="mx-auto ml-auto flex justify-center">
      <div
        class="animate-spin h-8  border-l-slate-400 w-8 rounded-full border-4 border-green-500"
      ></div>
    </div>
  </div>`,
  standalone: true,
})
export class LoadingComponent {}
