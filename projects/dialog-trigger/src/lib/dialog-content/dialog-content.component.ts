import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {
  dialogTitle: string;
  dialogText: string;
  dialogButtonText = 'Submit';
  @Output() submitClicked = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.dialogTitle = this.data.dialogTitle;
    this.dialogText = this.data.dialogText;
  }

  submit() {
    const data = 'Your data';
    this.submitClicked.emit(data);
    this.dialogRef.close();
  }

  // closeDialog() {
  //   this.dialogRef.close();
  // }
}
