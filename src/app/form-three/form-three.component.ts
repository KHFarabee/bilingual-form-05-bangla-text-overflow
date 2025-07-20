import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss'],
})
export class FormThreeComponent {
  title = 'bilingual-form-05-bangla-text-overflow';
  selectedLang = 'en';
  name = '';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(this.selectedLang);
  }

  switchLang(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }
}
