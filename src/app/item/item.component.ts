import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
btnhide=false;
  hidesecbtn= true;
hideEle=false;
hidebtn=true;
   hidden =false;
   url= 'https://gifdb.com/images/high/cute-baby-dance-woohoo-lst02efj2sqf4c1b.gif';
     heading = "AM I BEAUTIFUL ?"
    myurl='https://previews.123rf.com/images/drizzd/drizzd1307/drizzd130700184/20932902-funny-cartoon-question-mark.jpg'
 handleYes(){
  console.log("button clicked");
      this.hidden =!this.hidden;
      this.btnhide=true;
      this.hideEle=true;
      this.hidebtn=true;
      this.hidesecbtn=true;
    }
   
   
}
