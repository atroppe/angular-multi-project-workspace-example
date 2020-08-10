import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogTriggerComponent } from './dialog-trigger.component';

@NgModule({
  declarations: [DialogTriggerComponent, DialogContentComponent],
  imports: [MatDialogModule],
  exports: [DialogTriggerComponent],
  entryComponents: [DialogContentComponent],
})
export class DialogTriggerModule {}
