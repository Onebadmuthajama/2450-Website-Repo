import { BrowserModule } from  "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { CategoriesComponent } from "./categories/categories.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";

import { UserService } from "./user/user.service";

const appRoutes: Routes  = [
  { path: "category", component: CategoriesComponent },
  // will need to have this route to view a categories tasks.
  //{ path: 'category/:id', component: CategoryComponent },
  {
    path: "categories/:id",
    component: CategoriesComponent,
    data: { title: 'Categories List' }
  },
  {
    path: "categories/:id/:id",
    component: CategoriesComponent,
    data: { title: 'Category' }
  },
  {
    path: "tasks/:id",
    component: TasksComponent,
    data: { title: 'Task List' }
  },
  {
    path: "tasks/:id/:id",
    component: TasksComponent,
    data: { title: 'Task' }
  },

  { path: "",
    redirectTo: "/users",
    pathMatch: "full"
  },
  { path: "**", component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TasksComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
