import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceryserviceService } from './../groceryservice.service';
import { InputdialogService } from '../inputdialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  title = "Grocery List";

  constructor(public navCtrl:NavController, public toastCtrl:ToastController, public AlertCtrl:AlertController,public dataService:GroceryserviceService, public InputdialogService: InputdialogService, public socialSharing: SocialSharing ) {
    
  }
loaditems(){
return this.dataService.getitems();
}


   async removeitem(item, index) {
  console.log("Removing Item - ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing Item - ' + index + " ...",
    duration: 3000
  });
  
  (await toast).present()

  this.dataService.removeitem(index);
}

shareitem(item, index) {
  console.log("Sharing Item - ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Sharing Item - ' + index + " ...",
    duration: 3000
  });
  
  let message = "Grocery Item:"+ item.name+"Quantity"+item.quantity;
  let subject = "Shared via Will Cowan's Grocery App"
  this.socialSharing.share(message,subject).then(() => {
    // Success!
  }).catch(() => {
    // Error!
  });

}

  async edititem(item, index) {
  console.log("Edit Item - ", item, index);
  const toast = this.toastCtrl.create({
    message: 'Edit Item - ' + index + " ...",
    duration: 3000
  });
  
  (await toast).present();
  this.showEditItemPrompt(item, index);


}

additem() {
  console.log("Adding Item");
  this.showAddItemPrompt();
}
  async showAddItemPrompt() {
  const prompt = this.AlertCtrl.create({
    header:'Add Item',
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
          this.dataService.additem(item);
        }
      }
    ]
  });
  (await prompt).present();
}

  async showEditItemPrompt(item, index) {
  const prompt = this.AlertCtrl.create({
    header: 'Edit Item',
    message: "Please edit item...",
    inputs: [
      {
        name: 'name',
        placeholder: 'Name',
        value: item.name
      },
      {
        name: 'quantity',
        placeholder: 'Quantity',
        value: item.quantity
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
          this.dataService.edititem(item, index);   
        }
      }
    ]
  });
  (await prompt).present();
}  



}
