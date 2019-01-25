/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from 'ionic-settings';
import Color from 'color';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ionic-settings";
import * as i3 from "@ionic-native/status-bar/ngx/index";
/**
 * @record
 */
export function ThemeConfig() { }
if (false) {
    /** @type {?} */
    ThemeConfig.prototype.themes;
    /** @type {?} */
    ThemeConfig.prototype.defaultTheme;
}
/**
 * @record
 */
export function Theme() { }
if (false) {
    /** @type {?} */
    Theme.prototype.name;
    /** @type {?|undefined} */
    Theme.prototype.colors;
    /** @type {?|undefined} */
    Theme.prototype.properties;
}
/**
 * @record
 */
export function IonicColors() { }
if (false) {
    /** @type {?|undefined} */
    IonicColors.prototype.primary;
    /** @type {?|undefined} */
    IonicColors.prototype.secondary;
    /** @type {?|undefined} */
    IonicColors.prototype.tertiary;
    /** @type {?|undefined} */
    IonicColors.prototype.success;
    /** @type {?|undefined} */
    IonicColors.prototype.warning;
    /** @type {?|undefined} */
    IonicColors.prototype.danger;
    /** @type {?|undefined} */
    IonicColors.prototype.light;
    /** @type {?|undefined} */
    IonicColors.prototype.medium;
    /** @type {?|undefined} */
    IonicColors.prototype.dark;
    /** @type {?|undefined} */
    IonicColors.prototype.foreground;
    /** @type {?|undefined} */
    IonicColors.prototype.background;
}
/**
 * @record
 */
export function Properties() { }
/** @type {?} */
export const THEME_CONFIG = new InjectionToken('THEME_CONFIG');
// @dynamic
export class ThemeService {
    /**
     * @param {?} config
     * @param {?} document
     * @param {?} settings
     * @param {?} statusBar
     */
    constructor(config, document, settings, statusBar) {
        this.config = config;
        this.document = document;
        this.settings = settings;
        this.statusBar = statusBar;
    }
    /**
     * @return {?}
     */
    initialize() {
        return new Promise((resolve, reject) => {
            if (!this.theme) {
                this.theme = new BehaviorSubject(this.getTheme(this.settings.get('theme', this.config.defaultTheme)));
                this.setTheme(this.theme.value);
            }
            resolve();
        });
    }
    /**
     * @return {?}
     */
    getThemes() {
        return this.config.themes;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getTheme(name) {
        /** @type {?} */
        const theme = this.config.themes.find(t => t.name === name);
        if (!theme) {
            throw new Error('Theme Not Found');
        }
        return theme;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    isActiveTheme(name) {
        return this.theme.value.name === name;
    }
    /**
     * @return {?}
     */
    getActiveTheme() {
        return this.theme.asObservable();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    setActiveTheme(name) {
        if (!this.isActiveTheme(name)) {
            /** @type {?} */
            const theme = this.getTheme(name);
            this.setTheme(theme);
            this.theme.next(theme);
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        /** @type {?} */
        const properties = this.generateTheme(theme);
        this.statusBar.backgroundColorByHexString(properties['--ion-color-primary-shade']);
        this.document.documentElement.style.cssText = Object.entries(properties).reduce((accumulator, [propertyName, value]) => {
            return (accumulator += `${propertyName}: ${value};`);
        }, '');
        this.settings.set('theme', theme.name);
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    generateTheme(theme) {
        /** @type {?} */
        let properties = Object.assign({}, theme.properties);
        if (theme.colors) {
            properties = Object.assign({}, properties, Object.entries(theme.colors)
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
                return Object.assign({}, accumulator, currentValue);
            }, {}));
            if (theme.colors.background && theme.colors.foreground) {
                /** @type {?} */
                const backgroundColor = Color(theme.colors.background);
                /** @type {?} */
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
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    colorToRGB(color) {
        return color
            .rgb()
            .array()
            .join(', ');
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    contrast(color) {
        const { r, g, b } = color.rgb().object();
        return (r + g + b) / 3 > 128 ? Color('#fff') : Color('#000');
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    shade(color) {
        return color.mix(Color('#000'), 0.12);
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    tint(color) {
        return color.mix(Color('#fff'), 0.1);
    }
}
ThemeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [THEME_CONFIG,] }] },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: SettingsService },
    { type: StatusBar }
];
/** @nocollapse */ ThemeService.ngInjectableDef = i0.defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(i0.inject(THEME_CONFIG), i0.inject(i1.DOCUMENT), i0.inject(i2.SettingsService), i0.inject(i3.StatusBar)); }, token: ThemeService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    ThemeService.prototype.statusBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFFekQsaUNBR0M7OztJQUZDLDZCQUFnQjs7SUFDaEIsbUNBQXFCOzs7OztBQUV2QiwyQkFJQzs7O0lBSEMscUJBQWE7O0lBQ2IsdUJBQXFCOztJQUNyQiwyQkFBd0I7Ozs7O0FBRTFCLGlDQVlDOzs7SUFYQyw4QkFBaUI7O0lBQ2pCLGdDQUFtQjs7SUFDbkIsK0JBQWtCOztJQUNsQiw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsNkJBQWdCOztJQUNoQiw0QkFBZTs7SUFDZiw2QkFBZ0I7O0lBQ2hCLDJCQUFjOztJQUNkLGlDQUFvQjs7SUFDcEIsaUNBQW9COzs7OztBQUV0QixnQ0FFQzs7QUFDRCxNQUFNLE9BQU8sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFjLGNBQWMsQ0FBQzs7QUFNM0UsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7SUFHdkIsWUFDZ0MsTUFBbUIsRUFDdkIsUUFBa0IsRUFDcEMsUUFBeUIsRUFDekIsU0FBb0I7UUFIRSxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7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QUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFTyxLQUFLLENBQUMsS0FBWTtRQUN4QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVPLElBQUksQ0FBQyxLQUFZO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBdElGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FLSSxNQUFNLFNBQUMsWUFBWTtZQUNnQixRQUFRLHVCQUEzQyxNQUFNLFNBQUMsUUFBUTtZQXhDWCxlQUFlO1lBRWYsU0FBUzs7Ozs7Ozs7SUFrQ2hCLDZCQUFzQzs7Ozs7SUFHcEMsOEJBQWlEOzs7OztJQUNqRCxnQ0FBNEM7Ozs7O0lBQzVDLGdDQUFpQzs7Ozs7SUFDakMsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdpb25pYy1zZXR0aW5ncyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyL25neCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICB0aGVtZXM6IFRoZW1lW107XG4gIGRlZmF1bHRUaGVtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBUaGVtZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3JzPzogSW9uaWNDb2xvcnM7XG4gIHByb3BlcnRpZXM/OiBQcm9wZXJ0aWVzO1xufVxuZXhwb3J0IGludGVyZmFjZSBJb25pY0NvbG9ycyB7XG4gIHByaW1hcnk/OiBzdHJpbmc7XG4gIHNlY29uZGFyeT86IHN0cmluZztcbiAgdGVydGlhcnk/OiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBzdHJpbmc7XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG4gIGRhbmdlcj86IHN0cmluZztcbiAgbGlnaHQ/OiBzdHJpbmc7XG4gIG1lZGl1bT86IHN0cmluZztcbiAgZGFyaz86IHN0cmluZztcbiAgZm9yZWdyb3VuZD86IHN0cmluZztcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydGllcyB7XG4gIFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWc+KCdUSEVNRV9DT05GSUcnKTtcblxuLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgdGhlbWU6IEJlaGF2aW9yU3ViamVjdDxUaGVtZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUSEVNRV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBUaGVtZUNvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0dXNCYXI6IFN0YXR1c0JhclxuICApIHt9XG5cbiAgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnRoZW1lKSB7XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgICAgICAgIHRoaXMuZ2V0VGhlbWUodGhpcy5zZXR0aW5ncy5nZXQoJ3RoZW1lJywgdGhpcy5jb25maWcuZGVmYXVsdFRoZW1lKSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLnRoZW1lLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRoZW1lcygpOiBUaGVtZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcudGhlbWVzO1xuICB9XG5cbiAgZ2V0VGhlbWUobmFtZTogc3RyaW5nKTogVGhlbWUge1xuICAgIGNvbnN0IHRoZW1lID0gdGhpcy5jb25maWcudGhlbWVzLmZpbmQodCA9PiB0Lm5hbWUgPT09IG5hbWUpO1xuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlbWUgTm90IEZvdW5kJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGVtZTtcbiAgfVxuXG4gIGlzQWN0aXZlVGhlbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUudmFsdWUubmFtZSA9PT0gbmFtZTtcbiAgfVxuXG4gIGdldEFjdGl2ZVRoZW1lKCk6IE9ic2VydmFibGU8VGhlbWU+IHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldEFjdGl2ZVRoZW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZVRoZW1lKG5hbWUpKSB7XG4gICAgICBjb25zdCB0aGVtZSA9IHRoaXMuZ2V0VGhlbWUobmFtZSk7XG4gICAgICB0aGlzLnNldFRoZW1lKHRoZW1lKTtcbiAgICAgIHRoaXMudGhlbWUubmV4dCh0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZW5lcmF0ZVRoZW1lKHRoZW1lKTtcbiAgICB0aGlzLnN0YXR1c0Jhci5iYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZyhwcm9wZXJ0aWVzWyctLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlJ10pO1xuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzKS5yZWR1Y2UoXG4gICAgICAoYWNjdW11bGF0b3IsIFtwcm9wZXJ0eU5hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICByZXR1cm4gKGFjY3VtdWxhdG9yICs9IGAke3Byb3BlcnR5TmFtZX06ICR7dmFsdWV9O2ApO1xuICAgICAgfSxcbiAgICAgICcnXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLnNldCgndGhlbWUnLCB0aGVtZS5uYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVUaGVtZSh0aGVtZTogVGhlbWUpOiBQcm9wZXJ0aWVzIHtcbiAgICBsZXQgcHJvcGVydGllcyA9IHsgLi4udGhlbWUucHJvcGVydGllcyB9O1xuICAgIGlmICh0aGVtZS5jb2xvcnMpIHtcbiAgICAgIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnByb3BlcnRpZXMsXG4gICAgICAgIC4uLk9iamVjdC5lbnRyaWVzKHRoZW1lLmNvbG9ycylcbiAgICAgICAgICAuZmlsdGVyKChbbmFtZV0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgJ3NlY29uZGFyeScsXG4gICAgICAgICAgICAgICd0ZXJ0aWFyeScsXG4gICAgICAgICAgICAgICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgJ21lZGl1bScsXG4gICAgICAgICAgICAgICdkYXJrJ1xuICAgICAgICAgICAgXS5pbmNsdWRlcyhuYW1lKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoKFtuYW1lLCBjb2xvcl0pID0+IHtcbiAgICAgICAgICAgIGNvbG9yID0gQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9YF06IGNvbG9yLmhleCgpLFxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX0tcmdiYF06IHRoaXMuY29sb3JUb1JHQihjb2xvciksXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfS1jb250cmFzdGBdOiB0aGlzLmNvbnRyYXN0KGNvbG9yKS5oZXgoKSxcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9LWNvbnRyYXN0LXJnYmBdOiB0aGlzLmNvbG9yVG9SR0IodGhpcy5jb250cmFzdChjb2xvcikpLFxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX0tc2hhZGVgXTogdGhpcy5zaGFkZShjb2xvcikuaGV4KCksXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfS10aW50YF06IHRoaXMudGludChjb2xvcikuaGV4KClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5hY2N1bXVsYXRvciwgLi4uY3VycmVudFZhbHVlIH07XG4gICAgICAgICAgfSwge30pXG4gICAgICB9O1xuICAgICAgaWYgKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kICYmIHRoZW1lLmNvbG9ycy5mb3JlZ3JvdW5kKSB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IENvbG9yKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kKTtcbiAgICAgICAgY29uc3QgZm9yZWdyb3VuZENvbG9yID0gQ29sb3IodGhlbWUuY29sb3JzLmZvcmVncm91bmQpO1xuICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yYF0gPSBiYWNrZ3JvdW5kQ29sb3IuaGV4KCk7XG4gICAgICAgIHByb3BlcnRpZXNbYC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiYF0gPSB0aGlzLmNvbG9yVG9SR0IoYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgcHJvcGVydGllc1tgLS1pb24tdGV4dC1jb2xvcmBdID0gZm9yZWdyb3VuZENvbG9yLmhleCgpO1xuICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi10ZXh0LWNvbG9yLXJnYmBdID0gdGhpcy5jb2xvclRvUkdCKGZvcmVncm91bmRDb2xvcik7XG4gICAgICAgIGZvciAobGV0IGkgPSA1MDsgaSA8IDEwMDA7IGkgKz0gNTApIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi1jb2xvci1zdGVwLSR7aX1gXSA9IGZvcmVncm91bmRDb2xvclxuICAgICAgICAgICAgLm1peChiYWNrZ3JvdW5kQ29sb3IsIDEgLSBpIC8gMTAwMClcbiAgICAgICAgICAgIC5oZXgoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIHByaXZhdGUgY29sb3JUb1JHQihjb2xvcjogQ29sb3IpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb2xvclxuICAgICAgLnJnYigpXG4gICAgICAuYXJyYXkoKVxuICAgICAgLmpvaW4oJywgJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnRyYXN0KGNvbG9yOiBDb2xvcik6IENvbG9yIHtcbiAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLnJnYigpLm9iamVjdCgpO1xuICAgIHJldHVybiAociArIGcgKyBiKSAvIDMgPiAxMjggPyBDb2xvcignI2ZmZicpIDogQ29sb3IoJyMwMDAnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hhZGUoY29sb3I6IENvbG9yKTogQ29sb3Ige1xuICAgIHJldHVybiBjb2xvci5taXgoQ29sb3IoJyMwMDAnKSwgMC4xMik7XG4gIH1cblxuICBwcml2YXRlIHRpbnQoY29sb3I6IENvbG9yKTogQ29sb3Ige1xuICAgIHJldHVybiBjb2xvci5taXgoQ29sb3IoJyNmZmYnKSwgMC4xKTtcbiAgfVxufVxuIl19