import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
]

@NgModule({
  imports: [...material],
  exports: [...material],
})
export class MaterialModule { }