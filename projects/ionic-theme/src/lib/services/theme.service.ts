import { Injectable, InjectionToken, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { SettingsService } from 'ionic-settings';
import Color from 'color';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export interface ThemeConfig {
  themes: Theme[];
  defaultTheme: string;
}
export interface Theme {
  name: string;
  colors?: IonicColors;
  properties?: Properties;
}
export interface IonicColors {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  success?: string;
  warning?: string;
  danger?: string;
  light?: string;
  medium?: string;
  dark?: string;
  foreground?: string;
  background?: string;
}
export interface Properties {
  [propertyName: string]: string;
}
export const THEME_CONFIG = new InjectionToken<ThemeConfig>('THEME_CONFIG');

// @dynamic
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: BehaviorSubject<Theme>;

  constructor(
    @Inject(THEME_CONFIG) private config: ThemeConfig,
    @Inject(DOCUMENT) private document: Document,
    private settings: SettingsService,
    private statusBar: StatusBar
  ) {}

  initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.theme) {
        this.theme = new BehaviorSubject(
          this.getTheme(this.settings.get('theme', this.config.defaultTheme))
        );
        this.setTheme(this.theme.value);
      }
      resolve();
    });
  }

  getThemes(): Theme[] {
    return this.config.themes;
  }

  getTheme(name: string): Theme {
    const theme = this.config.themes.find(t => t.name === name);
    if (!theme) {
      throw new Error('Theme Not Found');
    }
    return theme;
  }

  isActiveTheme(name: string): boolean {
    return this.theme.value.name === name;
  }

  getActiveTheme(): Observable<Theme> {
    return this.theme.asObservable();
  }

  setActiveTheme(name: string): void {
    if (!this.isActiveTheme(name)) {
      const theme = this.getTheme(name);
      this.setTheme(theme);
      this.theme.next(theme);
    }
  }

  private setTheme(theme: Theme): void {
    const properties = this.generateTheme(theme);
    this.statusBar.backgroundColorByHexString(properties['--ion-color-primary-shade']);
    this.document.documentElement.style.cssText = Object.entries(properties).reduce(
      (accumulator, [propertyName, value]) => {
        return (accumulator += `${propertyName}: ${value};`);
      },
      ''
    );
    this.settings.set('theme', theme.name);
  }

  private generateTheme(theme: Theme): Properties {
    let properties = { ...theme.properties };
    if (theme.colors) {
      properties = {
        ...properties,
        ...Object.entries(theme.colors)
          .filter(([name]) => {
            return [
              'primary',
              'secondary',
              'tertiary',
              'success',
              'warning',
              'danger',
              'light',
              'medium',
              'dark'
            ].includes(name);
          })
          .map(([name, color]) => {
            color = Color(color);
            return {
              [`--ion-color-${name}`]: color.hex(),
              [`--ion-color-${name}-rgb`]: this.colorToRGB(color),
              [`--ion-color-${name}-contrast`]: this.contrast(color).hex(),
              [`--ion-color-${name}-contrast-rgb`]: this.colorToRGB(this.contrast(color)),
              [`--ion-color-${name}-shade`]: this.shade(color).hex(),
              [`--ion-color-${name}-tint`]: this.tint(color).hex()
            };
          })
          .reduce((accumulator, currentValue) => {
            return { ...accumulator, ...currentValue };
          }, {})
      };
      if (theme.colors.background && theme.colors.foreground) {
        const backgroundColor = Color(theme.colors.background);
        const foregroundColor = Color(theme.colors.foreground);
        properties[`--ion-background-color`] = backgroundColor.hex();
        properties[`--ion-background-color-rgb`] = this.colorToRGB(backgroundColor);
        properties[`--ion-text-color`] = foregroundColor.hex();
        properties[`--ion-text-color-rgb`] = this.colorToRGB(foregroundColor);
        for (let i = 50; i < 1000; i += 50) {
          properties[`--ion-color-step-${i}`] = foregroundColor
            .mix(backgroundColor, 1 - i / 1000)
            .hex();
        }
      }
    }
    return properties;
  }

  private colorToRGB(color: Color): string {
    return color
      .rgb()
      .array()
      .join(', ');
  }

  private contrast(color: Color): Color {
    const { r, g, b } = color.rgb().object();
    return (r + g + b) / 3 > 128 ? Color('#fff') : Color('#000');
  }

  private shade(color: Color): Color {
    return color.mix(Color('#000'), 0.12);
  }

  private tint(color: Color): Color {
    return color.mix(Color('#fff'), 0.1);
  }
}
