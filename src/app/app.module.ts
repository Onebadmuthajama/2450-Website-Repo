import { BrowserModule } from "@angular/platform-browser";
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

const appRoutes: Routes = [
  // using as a test route.
  { path: "category", component: CategoriesComponent },
  {
    path: "categories/:userId",
    component: CategoriesComponent,
    data: { title: 'Categories List' }
  },
  {
    path: "categories/:userId/:categoryId",
    component: CategoriesComponent,
    data: { title: 'Category' }
  },
  {
    path: "tasks/:userId",
    component: TasksComponent,
    data: { title: 'Task List' }
  },
  {
    path: "tasks/:userId/:taskId",
    component: TasksComponent,
    data: { title: 'Task' }
  },
  {
    path: "",
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
      appRoutes
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
