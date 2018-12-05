import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  txtVn="";
  txtEn="";
   
  words: Word[] = [  // thêm Word[] để quét theo interface Word sai syntax thì sẽ báo
    { en: 'One', vn: 'Mot', isMemorized: true, _id: 'abcd1' },
    { en: 'Two', vn: 'Hai', isMemorized: false, _id: 'abcd2' },
    { en: 'Three', vn: 'Ba', isMemorized: false, _id: 'abcd3' },
    { en: 'Four', vn: 'Bon', isMemorized: true, _id: 'abcd4' }
  ];

  memorizedStyle = {
    fontWeight: 500,
    color: 'green'
  }

  forgotStyle = {
    fontWeight: 900,
    color: 'red'
  }


  removeWord (_id: string) {
    const index = this.words.findIndex(word => word._id === _id)
    this.words.splice(index,1) // xóa từ vi trí index di 1 đơn vị
  }

  toggleWord(_id: string) {
    const word = this.words.find(word => word._id === _id);
    word.isMemorized = !word.isMemorized;
  }

  onAddWord(word: Word) {
    this.words.unshift(word);
  }
}

interface Word {
  _id: string;
  en: string;
  vn: string;
  isMemorized: boolean;
}
