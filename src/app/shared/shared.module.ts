import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavigationBarComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NavigationBarComponent,
    InputSearchComponent,
  ]
})
export class SharedModule { }
