import { Component } from '@angular/core';
import { ThemeService } from 'ionic-theme';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage {
  theme: string;

  constructor(public themeServ: ThemeService) {
    themeServ.getActiveTheme().subscribe(theme => (this.theme = theme.name));
  }
}
