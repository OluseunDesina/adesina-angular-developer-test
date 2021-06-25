import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [
  // { name: 'Hydrogen', gender: "male", age: '11', phoneNumber: "07089306018", address: "Soloki"},
];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'gender', 'age', 'phoneNumber', 'address', 'action'];
  dataSource:any[] = [];

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.getPatientList()
  }

  getPatientList() {
    this.patientService.getPatients()
    .subscribe((patients) => {
      this.dataSource = patients
    })
  }

}
