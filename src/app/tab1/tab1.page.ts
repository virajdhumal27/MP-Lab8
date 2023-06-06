import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  date: string;
  type: string;
  selectedDate: string;
  selectedMonth: string;
  list: {text: string, date: string, month: string}[] = [];
  MONTHS: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor() { }


  onChange(event: any) {
    this.selectedDate = event._d.getDate();
    const mon = event._d.getMonth();
    this.selectedMonth = this.MONTHS[mon];
    console.log(event);
    console.log(event._d.getDate());
  }


  setTodo(text: string){
    this.list.push({text: text, date: this.selectedDate, month: this.selectedMonth});
  }


}
