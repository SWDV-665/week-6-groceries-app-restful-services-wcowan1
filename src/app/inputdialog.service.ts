
import { Injectable } from '@angular/core';
import { GroceryserviceService } from './groceryservice.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InputdialogService {

  constructor(public dataService:GroceryserviceService, public AlertCtrl:AlertController) { }

  ShowPrompt(item?,index?) {
    const prompt = this.AlertCtrl.create({
      header: item ? 'Edit Item':'Add Item',
      message: item? "Please edit item...": "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name:null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity:null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index ! == undefined) {
              this.dataService.edititem(item, index);
            }
            else {
              this.dataService.additem(item);
            }
          }
        }
      ]
    })
  
  
  }
  
     
}



