import { Component, OnInit } from '@angular/core';
import { Customer } from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  constructor() { }

  ngOnInit(): void{

  }

  Customers: Customer [ ]= [
    {CustomerNo: 1, name: 'Mark Vough', address: '', city: 'London', country: 'UK'},
    {CustomerNo: 2, name: 'John Smith', address: '', city: 'New York', country: 'USA'},
    {CustomerNo: 3, name: 'Mary Ann', address: '', city: 'Berlin', country: 'Germany'},
    {CustomerNo: 4, name: 'Rajesh Khatri', address: '', city: 'Mumbai', country: 'India'},
    {CustomerNo: 5, name: 'Rahul Raj', address: '', city: 'Delhi', country: 'India'}
  ]
}
