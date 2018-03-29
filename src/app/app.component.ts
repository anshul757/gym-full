import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public show: boolean;
  lat = 51.678418;
  lng = 7.809007;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.show = false;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  public showDrop() {
    this.show = !this.show;
  }
}

