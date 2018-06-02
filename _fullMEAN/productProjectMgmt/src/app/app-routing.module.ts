import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'products/new', component: CreateComponent, pathMatch: 'full' },
  { path: 'products/edit/:id', component: EditComponent, pathMatch: 'full' },
  { path: 'products', component: ListComponent,   children: [
        { path: 'item/:id', component: ItemComponent }
    ] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
