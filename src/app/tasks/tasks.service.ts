import { Tasks } from "./tasks.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  formData = new Tasks();
  readonly rootUrl = "http://localhost:50988/api";

  constructor(private readonly _http: HttpClient) {}
  loadTasks(categoryId: any) {
    return this._http.get(this.rootUrl + "/Tasks/" + categoryId);
  }

  loadTask(taskId: any, categoryId: any) {
    return this._http.get(this.rootUrl + "/Tasks/" + taskId + "/" + categoryId);
  }

  addTask(categoryId: any, task: Tasks) {
    return this._http.post(this.rootUrl + "/tasks/" + categoryId, task);
  }

  updateTask(taskId: any, task: Tasks) {
    return this._http.put(this.rootUrl + "/tasks/" + taskId, task);
  }

  deleteTask(taskId: any) {
    return this._http.delete(this.rootUrl + "/tasks/" + taskId);
  }

}
