import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.f()
  }

  f=()=>{
    this.api.user().subscribe(
      (data)=>{
        this.todoData=data
      }
    )
  }


  todoData:any={}
  ngOnInit(): void {
  }

}
