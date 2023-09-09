import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  operation(event:Event):void{
    if ((<HTMLInputElement>event.target).value == "sum") {
      this.result = this.number1 + this.number2;
    }
    else if((<HTMLInputElement>event.target).value == "rest"){
      this.result = this.number1 - this.number2;
    }
    else if ((<HTMLInputElement>event.target).value == "mult") {
      this.result = this.number1 * this.number2;
    }
    else{
        if (this.number2 == 0) {
          this.result = 0;
        }
        else{
          this.result = this.number1 / this.number2;
        }
    }
  }

  sum():void{
    this.result = this.number1 + this.number2;
  }

  rest():void{
    this.result = this.number1 - this.number2;
  }

  mult():void{
    this.result = this.number1 * this.number2;
  }

  div():void{
    this.result = this.number1 / this.number2;
  }

}


