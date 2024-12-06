import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-car',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-new-car-component.component.html',
  styleUrls: ['./add-new-car-component.component.scss'],
})
export class AddNewCarComponentComponent {
  @Input() isModalOpen: boolean = false;
  @Input() jobOptions: Array<any> = [];
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() addCarEvent = new EventEmitter<any>();

  car = {
    registrationNumber: '',
    model: '',
    color: '',
    owner: '',
    job: '',
  };

  closeModal() {
    this.closeModalEvent.emit();
  }

  submitForm() {
    this.addCarEvent.emit(this.car);
    this.closeModal();
  }
}
