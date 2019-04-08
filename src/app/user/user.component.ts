import { UserService } from "./user.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(private readonly _service: UserService, private readonly _router: Router, private readonly _toastr: ToastrService) {}

  ngOnInit() {
    this.resetForm(null);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      this._service.formData = {
        id: null,
        name: "",
        password: ""
      };
    }
  }

  onSubmit(form: NgForm) {
    this._service.postUserForLogin(form.value).subscribe(
      response => {
        // add routing to categories here, -> get categories by userId, include tasks
        let jsonResult = JSON.parse(JSON.stringify(response));
        this._toastr.success(`Login Successful for user with Id: ${jsonResult.Id}`, "Task List Manager");
        this._router.navigateByUrl(`/categories/${jsonResult.Id}`);
      },
      error => {
        console.log(error);
      });
  }
}
