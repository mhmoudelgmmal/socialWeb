import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http:HttpClient) { }
  getAllPosts():Observable<any>{
    let url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get<any>(url)
  }
  getSinglePost(id:string):Observable<any>{
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return this.http.get<any>(url)
  }
  DeleteSinglePost(id:string):Observable<any>{
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return this.http.delete<any>(url)
  }
}
