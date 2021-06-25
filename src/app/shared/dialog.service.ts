import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MessageDialogComponent } from "./message-dialog/message-dialog.component";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(message) {
    return this.dialog.open(MessageDialogComponent, {
      width: "668px",
      height: "290px",
      panelClass: "message-dialog",
      data: {
        message,
      },
    });
  }
}
