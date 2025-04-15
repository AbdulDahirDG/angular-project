import { Component, EventEmitter, Input, Output, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-olr',
  imports: [CommonModule],
  templateUrl: './dialog-olr.component.html',
  styleUrl: './dialog-olr.component.css'
})
export class DialogOLRComponent {

  @Input({required: true}) total!: WritableSignal<number>;
  @Input({required: true}) productList!: WritableSignal<{name: string, count: number}[]>

  onClose(){
    this.close.emit()
    this.productList.set([])
    this.total.set(0)
  }

  @Output() close = new EventEmitter<string>()

}
