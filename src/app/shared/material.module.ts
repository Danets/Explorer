import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
]

@NgModule({
  imports: [...material],
  exports: [...material],
})
export class MaterialModule { }