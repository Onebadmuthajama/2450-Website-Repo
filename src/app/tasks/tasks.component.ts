import { TasksService } from "./tasks.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {

  constructor(private readonly _service: TasksService, private readonly _route: ActivatedRoute, private readonly _router: Router, private readonly _toastr: ToastrService) { }

  categoryId: any;
  userId: any;
  rows: any[];
  task: any;
  edit = false;

  ngOnInit() {
    this.resetForm(null);
    this.categoryId = this._route.snapshot.paramMap.get("categoryId");
    this.userId = this._route.snapshot.paramMap.get("userId");
    this.edit = false;

    this._service.loadTasks(this.categoryId).subscribe(
      response => {
        this.rows = JSON.parse(JSON.stringify(response));
        //this._toastr.success(`Login Successful for user with Id: ${jsonResult.Id}`, "Task List Manager");
        console.log(this.rows);
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
      categoryId: null,
      priority: null,
      userId: this.categoryId
    };
  }

  onSubmit(form: NgForm) {
    this._service.addTask(this.categoryId, form.value).subscribe(
      response => {
        let jsonResult = JSON.parse(JSON.stringify(response));
        this._toastr.success(`${jsonResult.Name} Task Creation Successful`, "Task List Manager");
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
  }

  deleteTask(taskId: number) {
    this._service.deleteTask(taskId).subscribe(
      response => {
        let jsonResult = JSON.parse(JSON.stringify(response));
        this._toastr.success(`${jsonResult.Name} Task Deleted Successfully`, "Task List Manager");
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
  }

  editTask(taskId: number, categoryId: number) {
    this._service.loadTask(taskId, categoryId).subscribe(
      response => {
        this.task = JSON.parse(JSON.stringify(response));
        this.edit = true;
      },
      error => {
        console.log(error);
      });
  }

  updateTask(taskId: number, form: NgForm) {
    form.value.Id = taskId;
    form.value.UserId = this.task.UserId;
    form.value.CategoryId = this.categoryId;
    this._service.updateTask(taskId, form.value).subscribe(
      response => {
        this.task = JSON.parse(JSON.stringify(response));
        this.edit = false;
        this.ngOnInit();
      },
      error => {
        console.log(error);
      });
  }

  fallback(form: NgForm) {
        this._router.navigateByUrl(`/categories/${this.userId}`);
  }
}
