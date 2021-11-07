import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters: Boolean = false;
  includeNumbers: Boolean = false;
  includeSymbols: Boolean = false;
  password: string = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  };

  onChangeUseNumbers() {
    return this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    return this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    
    this.password = 'my password!!';
    
  }


}
