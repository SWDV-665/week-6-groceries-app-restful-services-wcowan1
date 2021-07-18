import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  title = "Grocery List";
  items=[
    {
      name: "Milk",
      quantity:2
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name:"Fish",
      quantity: 3
    },
  ];

  constructor(public navCtrl:NavController, public toastCtrl:ToastController, public AlertCtrl:AlertController) {
    
  }

   async removeitem(item, index) {
  console.log("Removing Item - ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing Item - ' + index + " ...",
    duration: 3000
  });
  
  (await toast).present()

  this.items.splice(index, 1);
}

additem() {
  console.log("Adding Item");
  this.showAddItemPrompt();
}

  async showAddItemPrompt() {
  const prompt = this.AlertCtrl.create({
    header: 'Add Item',
    message: "Please enter item...",
    inputs: [
      {
        name: 'name',
        placeholder: 'Name'
      },
      {
        name: 'quantity',
        placeholder: 'Quantity'
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
          this.items.push(item);
        }
      }
    ]
  });
  (await prompt).present()
}


}
