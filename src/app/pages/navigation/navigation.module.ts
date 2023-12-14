import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    SharedModule
  ]
})
export class NavigationModule { }
