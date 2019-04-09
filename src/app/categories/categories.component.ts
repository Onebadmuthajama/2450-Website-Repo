import { CategoriesService } from "./categories.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {

  constructor(private readonly _service: CategoriesService, private readonly _route: ActivatedRoute, private readonly _router: Router, private readonly _toastr: ToastrService) {}

  userId: any;
  rows: any[];
  category: any;
  edit = false;

  ngOnInit() {
    this.resetForm(null);
    this.userId = this._route.snapshot.paramMap.get("userId");

    this._service.loadCategories(this.userId).subscribe(
      response => {
        this.rows = JSON.parse(JSON.stringify(response));
        //this._toastr.success(`Login Successful for user with Id: ${jsonResult.Id}`, "Task List Manager");
        console.log(this.rows);
        this.edit = false;
      },
      error => {
        console.log(error);
      });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this._service.formData = {
        id: null,
        name: "",
        description: "",
        priority: null,
        userId: this.userId
      };
  }

  onSubmit(form: NgForm) {
    this._service.addCategory(this.userId, form.value).subscribe(
      response => {
        let jsonResult = JSON.parse(JSON.stringify(response));
        this._toastr.success(`${jsonResult.Name} Category Creation Successful`, "Task List Manager");
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
  }

  deleteCategory(categoryId: number) {
    this._service.deleteCategory(categoryId).subscribe(
      response => {
        let jsonResult = JSON.parse(JSON.stringify(response));
        this._toastr.success(`${jsonResult.Name} Category Deleted Successfully`, "Task List Manager");
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
  }

  editCategory(userId: number, categoryId: number) {
    this._service.loadCategory(userId, categoryId).subscribe(
      response => {
        this.category = JSON.parse(JSON.stringify(response));
        this.edit = true;
      },
      error => {
        console.log(error);
      });
  }

  updateCategory(categoryId: number, form: NgForm) {
    form.value.Id = categoryId;
    form.value.UserId = this.category.UserId;
    this._service.updateCategory(categoryId, form.value).subscribe(
      response => {
        this.category = JSON.parse(JSON.stringify(response));
        this.edit = false;
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
  }
}
