import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trainings';
  private currentLangs = ['en', 'pl'];
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.currentLangs[0]);
    translate.use(this.currentLangs[0]);
  }

  changeLang() {
      this.translate.use(this.currentLangs.find(l => l != this.translate.currentLang) || this.translate.currentLang);
    }
}
