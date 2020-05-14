import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewListComponent } from './view-list/view-list.component';
import { UpdateComponent } from './update/update.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { PageNotFoundComponent } from './header/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'add', component:AddBookComponent
  },
  {
    path:'viewall', component:ViewListComponent
  },
  {
    path:'update/:id', component:UpdateComponent
  },
  {
    path:'view/:id', component:ViewBookComponent
  },
  {
    path:'not-Found', component:PageNotFoundComponent
  },
  {
    path:'**',redirectTo:'/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
