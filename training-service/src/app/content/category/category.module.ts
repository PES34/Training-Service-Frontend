import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { CategoryListComponent } from '../category/component/category-list/category-list.component';
import { CategoryAddComponent } from './component/category-add/category-add.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryAddComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CategoryModule {}
