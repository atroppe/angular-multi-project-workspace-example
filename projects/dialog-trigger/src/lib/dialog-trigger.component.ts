import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
  selector: 'lib-dialog-trigger',
  template: `
    <button mat-raised-button color="primary" (click)="openDialog()">{{ buttonText }}</button>
  `,
  styles: [],
})
export class DialogTriggerComponent {
  @Input() dialogTitle = '';
  @Input() dialogText = '';
  @Input() buttonText = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { dialogTitle: this.dialogTitle, dialogText: this.dialogText },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked.subscribe(
      (result) => {
        dialogSubmitSubscription.unsubscribe();
      }
    );
  }
}
