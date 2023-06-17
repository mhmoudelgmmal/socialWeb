import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http:HttpClient) { }
  // this to share the data of the posts in all the project
  allPosts:BehaviorSubject<any> = new BehaviorSubject<any>(null)

  getAllPostsArray(){
    return this.allPosts.value
  }
  setAllPostsArray(arr:any){
    this.allPosts.next(arr)
  }
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
  addSinglePost(body:any){
    let url = `https://jsonplaceholder.typicode.com/posts`
    return this.http.post<any>(url,body)
  }
  updateSinglePost(id:string,body:any){
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return this.http.put<any>(url,body)
  }
  getAllComments(){
    let url = `https://jsonplaceholder.typicode.com/comments`
    return this.http.get<any>(url)
  }
  getPostComments(id:string){
    let url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    return this.http.get<any>(url)
  }
}
