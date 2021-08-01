import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GroceryserviceService {
  items=[];
  constructor() { }

getitems() {
   return this.items;
 }

 removeitem(index) {
   this.items.splice(index, 1);
 }

 additem(item) {
   this.items.push(item);
 }

edititem(item, index){
   this.items[index] = item;
 }

}
