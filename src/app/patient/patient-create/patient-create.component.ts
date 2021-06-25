import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "src/app/shared/dialog.service";
import { PatientService } from "../patient.service";

@Component({
  selector: "app-patient-create",
  templateUrl: "./patient-create.component.html",
  styleUrls: ["./patient-create.component.scss"],
})
export class PatientCreateComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  titleArray: any[] = []
  genderArray: any[] = []

  constructor(
    private formBuilder: FormBuilder,
    private patientSrvice: PatientService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      title: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      middlename: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      gender: ["", Validators.required],
      dob: ["", Validators.required],
      address: ["", Validators.required],
      image: ["", Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      ethnic: ["", Validators.required],
      religion: ["", Validators.required],
      maritalStatus: ["", Validators.required],
      occupation: ["", Validators.required],
      bloodGroup: ["", Validators.required],
      patientType: ["", Validators.required],
      nationality: ["", Validators.required],
      stateOfOrigin: ["", Validators.required],
      lga: ["", Validators.required],
      stateOfResidence: ["", Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      fullname: ["", Validators.required],
      relationship: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
    });
    this.fourthFormGroup = this.formBuilder.group({
      billing: ["", Validators.required],
    });
  }

  registerPatient() {
    this.patientSrvice.createPatient()
  }
}
