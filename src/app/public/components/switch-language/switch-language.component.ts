import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.css'
})
export class SwitchLanguageComponent {

  constructor(private translateService: TranslateService) { }

  changeLanguage(language: string) {
    this.translateService.use(language);
  }

  protected readonly toolbar = toolbar;
}
