import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


const material = [
  MatToolbarModule,
  MatButtonModule,
]

@NgModule({
  imports: [...material],
  exports: [...material],
})
export class MaterialModule { }