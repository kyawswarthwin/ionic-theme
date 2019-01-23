import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Color from 'color';

export interface Theme {
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
  dark?: string;
  medium?: string;
  light?: string;
  foreground?: string;
  background?: string;
}
export interface Properties {
  [propertyName: string]: string;
}

// @dynamic
@Injectable({
  providedIn: 'root'
})
export class IonicThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  getPropertyValue(propertyName: string): string {
    return window.getComputedStyle(this.document.documentElement).getPropertyValue(propertyName);
  }

  setProperty(propertyName: string, value: string | null, priority?: string | null): void {
    this.document.documentElement.style.setProperty(propertyName, value, priority);
  }

  removeProperty(propertyName: string): string {
    return this.document.documentElement.style.removeProperty(propertyName);
  }

  setTheme(theme: Theme): void {
    this.document.documentElement.style.cssText = Object.entries(this.generateTheme(theme)).reduce(
      (accumulator, [propertyName, value]) => {
        return (accumulator += `${propertyName}: ${value};`);
      },
      ''
    );
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
              'dark',
              'medium',
              'light'
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
