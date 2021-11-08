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
  length: number = 0;
  password: string = '';

  onChangeUseLetters() {
    return this.includeLetters = !this.includeLetters;
  };

  onChangeUseNumbers() {
    return this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    return this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: any) {
    const parseValue = parseInt(event?.target?.value);
    console.log(parseValue);
    

    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }

  onButtonClick() {
    
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijkmnopqrstuvwxyz';
    const symbols: string = '!@#$%^&*()_+';

    let validChars: string = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword: string = '';

    for (let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
     generatedPassword += validChars[index];
      
    }
    this.password = generatedPassword;
  }


}
