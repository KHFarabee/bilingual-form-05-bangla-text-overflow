import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss'],
})
export class FormOneComponent {
  title = 'bilingual-form-05-bangla-text-overflow';
  selectedLang = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(this.selectedLang);
  }

  switchLang(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }
}
