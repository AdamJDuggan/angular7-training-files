import { NgModule } from '@angular/core';
// Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe,
// and so on. Re-exported by BrowserModule, which is included automatically in the root
// AppModule when you create a new app with the CLI new command.
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class ViewModule { }
