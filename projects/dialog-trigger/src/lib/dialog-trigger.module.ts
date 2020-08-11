import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogTriggerComponent } from './dialog-trigger.component';

@NgModule({
  declarations: [DialogTriggerComponent, DialogContentComponent],
  imports: [MatDialogModule, MatButtonModule],
  exports: [DialogTriggerComponent],
  entryComponents: [DialogContentComponent],
})
export class DialogTriggerModule {}
