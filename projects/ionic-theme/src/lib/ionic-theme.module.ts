import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { SettingsService } from 'ionic-settings';

import { ThemeConfig, THEME_CONFIG, ThemeService } from './services/theme.service';

// @dynamic
@NgModule()
export class IonicThemeModule {
  static forRoot(config: ThemeConfig): ModuleWithProviders {
    return {
      ngModule: IonicThemeModule,
      providers: [
        {
          provide: THEME_CONFIG,
          useValue: config
        },
        {
          provide: APP_INITIALIZER,
          useFactory: (settings: SettingsService, theme: ThemeService) => {
            return () => {
              return new Promise(async (resolve, reject) => {
                await settings.initialize();
                await theme.initialize();
                resolve();
              });
            };
          },
          deps: [SettingsService, ThemeService],
          multi: true
        }
      ]
    };
  }
}
