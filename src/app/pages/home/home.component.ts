import { Component } from '@angular/core';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';
import { AddNewCarComponentComponent } from '../../modals/add-new-car-component/add-new-car-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardCardComponent, AddNewCarComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isModalOpen = false;

  car = {
    registrationNumber: '',
    model: '',
    color: '',
    owner: '',
    job: '',
  };

  carsInService: any[] = [];

  jobOptions = [
    { id: 1, name: 'Engine Repair' },
    { id: 2, name: 'Car Wash' },
    { id: 3, name: 'Oil Change' },
    { id: 4, name: 'Tire Replacement' },
    { id: 5, name: 'Brake Inspection' },
  ];

  openAddCar() {
    this.isModalOpen = true;
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetAddCarForm();
  }

  resetAddCarForm() {
    this.car = {
      registrationNumber: '',
      model: '',
      color: '',
      owner: '',
      job: '',
    };
  }

  addCar(car: any) {
    this.carsInService.push(car);
  }
}
