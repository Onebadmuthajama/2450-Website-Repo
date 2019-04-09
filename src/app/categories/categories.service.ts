import { Categories } from "./categories.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  formData = new Categories();
  readonly rootUrl = "http://localhost:50988/api";

  constructor(private readonly _http: HttpClient) {}

  loadCategories(userId: any) {
    return this._http.get(this.rootUrl + "/Categories/" + userId);
  }

  // this call is not required, however, is being used in the favor of time.
  // loadCategories returns ALL categories, with their ID, so in the UI we should
  // be able to display using *ngIf(id = clicked object.id).  This is just easier
  // for now though.
  loadCategory(userId: any, categoryId: any) {
    return this._http.get(this.rootUrl + "/Categories/" + userId + "/" + categoryId);
  }

  addCategory(userId: any, category: Categories) {
    return this._http.post(this.rootUrl + "/Categories/" + userId, category);
  }

  updateCategory(categoryId: any, category: Categories) {
    return this._http.put(this.rootUrl + "/Categories/" + categoryId, category);
  }

  deleteCategory(categoryId: any) {
    return this._http.delete(this.rootUrl + "/Categories/" + categoryId);
  }
}
