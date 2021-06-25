import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { take } from "rxjs/operators";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { DialogService } from "../shared/dialog.service";

@Injectable({
  providedIn: "root",
})
export class PatientService {
  private url: string = environment.url;
  private patientList: any[];
  private patientListUpdated = new Subject<any[]>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialogService: DialogService
  ) {}

  createPatient() {
    this.http
      .post(`${this.url}patients`, {
        name: "Hydrogen",
        gender: "male",
        age: 11,
        phoneNumber: "07089306018",
        address: "Soloki",
      })
      .subscribe((response) => {
        this.dialogService
          .openDialog("Patient Registered Sucessfully")
          .afterClosed()
          .subscribe(() => {
            // this.firstFormGroup.reset();
            // this.secondFormGroup.reset();
            // this.thirdFormGroup.reset();
            // this.fourthFormGroup.reset();
            // stepper.reset();
            this.router.navigate(["/patient-list"]);
          });
      });
  }

  getPatients() {
    this.http
      .get<any[]>(`${this.url}patients`)
      .pipe(take(1))
      .subscribe((response) => {
        this.patientList = response;
        this.patientListUpdated.next([...this.patientList]);
      });
    return this.patientListUpdated.asObservable();
  }
}
