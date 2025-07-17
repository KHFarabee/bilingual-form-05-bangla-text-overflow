import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
