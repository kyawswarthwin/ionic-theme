import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Color from 'color';

export interface IonicColors {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  success?: string;
  warning?: string;
  danger?: string;
  dark?: string;
  medium?: string;
  light?: string;
  backgroundColor?: string;
  textColor?: string;
}
export interface CustomProperties {
  [propertyName: string]: string;
}

// @dynamic
@Injectable({
  providedIn: 'root'
})
export class IonicThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  getPropertyValue(propertyName: string): string {
    return this.document.documentElement.style.getPropertyValue(propertyName);
  }

  setProperty(propertyName: string, value: string | null, priority?: string | null): void {
    this.document.documentElement.style.setProperty(propertyName, value, priority);
  }

  removeProperty(propertyName: string): string {
    return this.document.documentElement.style.removeProperty(propertyName);
  }

  setTheme(colors?: IonicColors, properties?: CustomProperties): void {
    const css = `${this.generateColor(colors)}
${this.generateColorSteps(colors.backgroundColor, colors.textColor)}
${this.generateCustomProperties(properties)}`;
    this.setGlobalCSS(css);
  }

  private generateColor(colors: IonicColors): string {
    return Object.entries(colors || {})
      .filter(([name]) => {
        const filter = [
          'primary',
          'secondary',
          'tertiary',
          'success',
          'warning',
          'danger',
          'dark',
          'medium',
          'light'
        ];
        return filter.indexOf(name) > -1;
      })
      .map(([name, color]) => {
        color = Color(color);
        return `--ion-color-${name}: ${color.hex()};
--ion-color-${name}-rgb: ${this.colorToRGB(color)};
--ion-color-${name}-contrast: ${this.contrast(color).hex()};
--ion-color-${name}-contrast-rgb: ${this.colorToRGB(this.contrast(color))};
--ion-color-${name}-shade: ${this.shade(color).hex()};
--ion-color-${name}-tint: ${this.tint(color).hex()};
`;
      })
      .join('\n');
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

  private generateColorSteps(backgroundColor: string | Color, textColor: string | Color): string {
    let result = '';
    if (backgroundColor && textColor) {
      backgroundColor = Color(backgroundColor);
      textColor = Color(textColor);
      result += `--ion-background-color: ${backgroundColor.hex()};
--ion-background-color-rgb: ${this.colorToRGB(backgroundColor)};
--ion-text-color: ${textColor.hex()};
--ion-text-color-rgb: ${this.colorToRGB(textColor)};
`;
      for (let i = 50; i < 1000; i += 50) {
        result += `--ion-color-step-${i}: ${textColor.mix(backgroundColor, 1 - i / 1000).hex()};
`;
      }
    }
    return result;
  }

  private setGlobalCSS(css: string): void {
    this.document.documentElement.style.cssText = css;
  }

  private generateCustomProperties(properties: CustomProperties): string {
    return Object.entries(properties || {})
      .map(([propertyName, value]) => {
        return `${propertyName}: ${value};`;
      })
      .join('\n');
  }
}
