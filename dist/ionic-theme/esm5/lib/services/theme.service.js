/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var THEME_CONFIG = new InjectionToken('THEME_CONFIG');
// @dynamic
var ThemeService = /** @class */ (function () {
    function ThemeService(config, document, settings, statusBar) {
        this.config = config;
        this.document = document;
        this.settings = settings;
        this.statusBar = statusBar;
    }
    /**
     * @return {?}
     */
    ThemeService.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.theme) {
                _this.theme = new BehaviorSubject(_this.getTheme(_this.settings.get('theme', _this.config.defaultTheme)));
                _this.setTheme(_this.theme.value);
            }
            resolve();
        });
    };
    /**
     * @return {?}
     */
    ThemeService.prototype.getThemes = /**
     * @return {?}
     */
    function () {
        return this.config.themes;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ThemeService.prototype.getTheme = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var theme = this.config.themes.find(function (t) { return t.name === name; });
        if (!theme) {
            throw new Error('Theme Not Found');
        }
        return theme;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ThemeService.prototype.isActiveTheme = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.theme.value.name === name;
    };
    /**
     * @return {?}
     */
    ThemeService.prototype.getActiveTheme = /**
     * @return {?}
     */
    function () {
        return this.theme.asObservable();
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ThemeService.prototype.setActiveTheme = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.isActiveTheme(name)) {
            /** @type {?} */
            var theme = this.getTheme(name);
            this.setTheme(theme);
            this.theme.next(theme);
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    ThemeService.prototype.setTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        /** @type {?} */
        var properties = this.generateTheme(theme);
        this.statusBar.backgroundColorByHexString(properties['--ion-color-primary-shade']);
        this.document.documentElement.style.cssText = Object.entries(properties).reduce(function (accumulator, _a) {
            var _b = tslib_1.__read(_a, 2), propertyName = _b[0], value = _b[1];
            return (accumulator += propertyName + ": " + value + ";");
        }, '');
        this.settings.set('theme', theme.name);
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    ThemeService.prototype.generateTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        var _this = this;
        /** @type {?} */
        var properties = tslib_1.__assign({}, theme.properties);
        if (theme.colors) {
            properties = tslib_1.__assign({}, properties, Object.entries(theme.colors)
                .filter(function (_a) {
                var _b = tslib_1.__read(_a, 1), name = _b[0];
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
                .map(function (_a) {
                var _b = tslib_1.__read(_a, 2), name = _b[0], color = _b[1];
                var _c;
                color = Color(color);
                return _c = {},
                    _c["--ion-color-" + name] = color.hex(),
                    _c["--ion-color-" + name + "-rgb"] = _this.colorToRGB(color),
                    _c["--ion-color-" + name + "-contrast"] = _this.contrast(color).hex(),
                    _c["--ion-color-" + name + "-contrast-rgb"] = _this.colorToRGB(_this.contrast(color)),
                    _c["--ion-color-" + name + "-shade"] = _this.shade(color).hex(),
                    _c["--ion-color-" + name + "-tint"] = _this.tint(color).hex(),
                    _c;
            })
                .reduce(function (accumulator, currentValue) {
                return tslib_1.__assign({}, accumulator, currentValue);
            }, {}));
            if (theme.colors.background && theme.colors.foreground) {
                /** @type {?} */
                var backgroundColor = Color(theme.colors.background);
                /** @type {?} */
                var foregroundColor = Color(theme.colors.foreground);
                properties["--ion-background-color"] = backgroundColor.hex();
                properties["--ion-background-color-rgb"] = this.colorToRGB(backgroundColor);
                properties["--ion-text-color"] = foregroundColor.hex();
                properties["--ion-text-color-rgb"] = this.colorToRGB(foregroundColor);
                for (var i = 50; i < 1000; i += 50) {
                    properties["--ion-color-step-" + i] = foregroundColor
                        .mix(backgroundColor, 1 - i / 1000)
                        .hex();
                }
            }
        }
        return properties;
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    ThemeService.prototype.colorToRGB = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return color
            .rgb()
            .array()
            .join(', ');
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    ThemeService.prototype.contrast = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        var _a = color.rgb().object(), r = _a.r, g = _a.g, b = _a.b;
        return (r + g + b) / 3 > 128 ? Color('#fff') : Color('#000');
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    ThemeService.prototype.shade = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return color.mix(Color('#000'), 0.12);
    };
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    ThemeService.prototype.tint = /**
     * @private
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return color.mix(Color('#fff'), 0.1);
    };
    ThemeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [THEME_CONFIG,] }] },
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: SettingsService },
        { type: StatusBar }
    ]; };
    /** @nocollapse */ ThemeService.ngInjectableDef = i0.defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(i0.inject(THEME_CONFIG), i0.inject(i1.DOCUMENT), i0.inject(i2.SettingsService), i0.inject(i3.StatusBar)); }, token: ThemeService, providedIn: "root" });
    return ThemeService;
}());
export { ThemeService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBRXpELGlDQUdDOzs7SUFGQyw2QkFBZ0I7O0lBQ2hCLG1DQUFxQjs7Ozs7QUFFdkIsMkJBSUM7OztJQUhDLHFCQUFhOztJQUNiLHVCQUFxQjs7SUFDckIsMkJBQXdCOzs7OztBQUUxQixpQ0FZQzs7O0lBWEMsOEJBQWlCOztJQUNqQixnQ0FBbUI7O0lBQ25CLCtCQUFrQjs7SUFDbEIsOEJBQWlCOztJQUNqQiw4QkFBaUI7O0lBQ2pCLDZCQUFnQjs7SUFDaEIsNEJBQWU7O0lBQ2YsNkJBQWdCOztJQUNoQiwyQkFBYzs7SUFDZCxpQ0FBb0I7O0lBQ3BCLGlDQUFvQjs7Ozs7QUFFdEIsZ0NBRUM7O0FBQ0QsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBYyxjQUFjLENBQUM7O0FBRzNFO0lBTUUsc0JBQ2dDLE1BQW1CLEVBQ3ZCLFFBQWtCLEVBQ3BDLFFBQXlCLEVBQ3pCLFNBQW9CO1FBSEUsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGNBQVMsR0FBVCxTQUFT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QUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRU8sNEJBQUs7Ozs7O0lBQWIsVUFBYyxLQUFZO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sMkJBQUk7Ozs7O0lBQVosVUFBYSxLQUFZO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBdElGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBS0ksTUFBTSxTQUFDLFlBQVk7Z0JBQ2dCLFFBQVEsdUJBQTNDLE1BQU0sU0FBQyxRQUFRO2dCQXhDWCxlQUFlO2dCQUVmLFNBQVM7Ozt1QkFMbEI7Q0EwS0MsQUF2SUQsSUF1SUM7U0FwSVksWUFBWTs7Ozs7O0lBQ3ZCLDZCQUFzQzs7Ozs7SUFHcEMsOEJBQWlEOzs7OztJQUNqRCxnQ0FBNEM7Ozs7O0lBQzVDLGdDQUFpQzs7Ozs7SUFDakMsaUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdpb25pYy1zZXR0aW5ncyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyL25neCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICB0aGVtZXM6IFRoZW1lW107XG4gIGRlZmF1bHRUaGVtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBUaGVtZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3JzPzogSW9uaWNDb2xvcnM7XG4gIHByb3BlcnRpZXM/OiBQcm9wZXJ0aWVzO1xufVxuZXhwb3J0IGludGVyZmFjZSBJb25pY0NvbG9ycyB7XG4gIHByaW1hcnk/OiBzdHJpbmc7XG4gIHNlY29uZGFyeT86IHN0cmluZztcbiAgdGVydGlhcnk/OiBzdHJpbmc7XG4gIHN1Y2Nlc3M/OiBzdHJpbmc7XG4gIHdhcm5pbmc/OiBzdHJpbmc7XG4gIGRhbmdlcj86IHN0cmluZztcbiAgbGlnaHQ/OiBzdHJpbmc7XG4gIG1lZGl1bT86IHN0cmluZztcbiAgZGFyaz86IHN0cmluZztcbiAgZm9yZWdyb3VuZD86IHN0cmluZztcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydGllcyB7XG4gIFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWc+KCdUSEVNRV9DT05GSUcnKTtcblxuLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgdGhlbWU6IEJlaGF2aW9yU3ViamVjdDxUaGVtZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUSEVNRV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBUaGVtZUNvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0dXNCYXI6IFN0YXR1c0JhclxuICApIHt9XG5cbiAgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnRoZW1lKSB7XG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFxuICAgICAgICAgIHRoaXMuZ2V0VGhlbWUodGhpcy5zZXR0aW5ncy5nZXQoJ3RoZW1lJywgdGhpcy5jb25maWcuZGVmYXVsdFRoZW1lKSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLnRoZW1lLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRoZW1lcygpOiBUaGVtZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcudGhlbWVzO1xuICB9XG5cbiAgZ2V0VGhlbWUobmFtZTogc3RyaW5nKTogVGhlbWUge1xuICAgIGNvbnN0IHRoZW1lID0gdGhpcy5jb25maWcudGhlbWVzLmZpbmQodCA9PiB0Lm5hbWUgPT09IG5hbWUpO1xuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlbWUgTm90IEZvdW5kJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGVtZTtcbiAgfVxuXG4gIGlzQWN0aXZlVGhlbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUudmFsdWUubmFtZSA9PT0gbmFtZTtcbiAgfVxuXG4gIGdldEFjdGl2ZVRoZW1lKCk6IE9ic2VydmFibGU8VGhlbWU+IHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldEFjdGl2ZVRoZW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZVRoZW1lKG5hbWUpKSB7XG4gICAgICBjb25zdCB0aGVtZSA9IHRoaXMuZ2V0VGhlbWUobmFtZSk7XG4gICAgICB0aGlzLnNldFRoZW1lKHRoZW1lKTtcbiAgICAgIHRoaXMudGhlbWUubmV4dCh0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZW5lcmF0ZVRoZW1lKHRoZW1lKTtcbiAgICB0aGlzLnN0YXR1c0Jhci5iYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZyhwcm9wZXJ0aWVzWyctLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlJ10pO1xuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzKS5yZWR1Y2UoXG4gICAgICAoYWNjdW11bGF0b3IsIFtwcm9wZXJ0eU5hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICByZXR1cm4gKGFjY3VtdWxhdG9yICs9IGAke3Byb3BlcnR5TmFtZX06ICR7dmFsdWV9O2ApO1xuICAgICAgfSxcbiAgICAgICcnXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLnNldCgndGhlbWUnLCB0aGVtZS5uYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVUaGVtZSh0aGVtZTogVGhlbWUpOiBQcm9wZXJ0aWVzIHtcbiAgICBsZXQgcHJvcGVydGllcyA9IHsgLi4udGhlbWUucHJvcGVydGllcyB9O1xuICAgIGlmICh0aGVtZS5jb2xvcnMpIHtcbiAgICAgIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnByb3BlcnRpZXMsXG4gICAgICAgIC4uLk9iamVjdC5lbnRyaWVzKHRoZW1lLmNvbG9ycylcbiAgICAgICAgICAuZmlsdGVyKChbbmFtZV0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgJ3NlY29uZGFyeScsXG4gICAgICAgICAgICAgICd0ZXJ0aWFyeScsXG4gICAgICAgICAgICAgICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgJ21lZGl1bScsXG4gICAgICAgICAgICAgICdkYXJrJ1xuICAgICAgICAgICAgXS5pbmNsdWRlcyhuYW1lKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoKFtuYW1lLCBjb2xvcl0pID0+IHtcbiAgICAgICAgICAgIGNvbG9yID0gQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9YF06IGNvbG9yLmhleCgpLFxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX0tcmdiYF06IHRoaXMuY29sb3JUb1JHQihjb2xvciksXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfS1jb250cmFzdGBdOiB0aGlzLmNvbnRyYXN0KGNvbG9yKS5oZXgoKSxcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9LWNvbnRyYXN0LXJnYmBdOiB0aGlzLmNvbG9yVG9SR0IodGhpcy5jb250cmFzdChjb2xvcikpLFxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX0tc2hhZGVgXTogdGhpcy5zaGFkZShjb2xvcikuaGV4KCksXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfS10aW50YF06IHRoaXMudGludChjb2xvcikuaGV4KClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5hY2N1bXVsYXRvciwgLi4uY3VycmVudFZhbHVlIH07XG4gICAgICAgICAgfSwge30pXG4gICAgICB9O1xuICAgICAgaWYgKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kICYmIHRoZW1lLmNvbG9ycy5mb3JlZ3JvdW5kKSB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IENvbG9yKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kKTtcbiAgICAgICAgY29uc3QgZm9yZWdyb3VuZENvbG9yID0gQ29sb3IodGhlbWUuY29sb3JzLmZvcmVncm91bmQpO1xuICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yYF0gPSBiYWNrZ3JvdW5kQ29sb3IuaGV4KCk7XG4gICAgICAgIHByb3BlcnRpZXNbYC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiYF0gPSB0aGlzLmNvbG9yVG9SR0IoYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgcHJvcGVydGllc1tgLS1pb24tdGV4dC1jb2xvcmBdID0gZm9yZWdyb3VuZENvbG9yLmhleCgpO1xuICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi10ZXh0LWNvbG9yLXJnYmBdID0gdGhpcy5jb2xvclRvUkdCKGZvcmVncm91bmRDb2xvcik7XG4gICAgICAgIGZvciAobGV0IGkgPSA1MDsgaSA8IDEwMDA7IGkgKz0gNTApIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi1jb2xvci1zdGVwLSR7aX1gXSA9IGZvcmVncm91bmRDb2xvclxuICAgICAgICAgICAgLm1peChiYWNrZ3JvdW5kQ29sb3IsIDEgLSBpIC8gMTAwMClcbiAgICAgICAgICAgIC5oZXgoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIHByaXZhdGUgY29sb3JUb1JHQihjb2xvcjogQ29sb3IpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb2xvclxuICAgICAgLnJnYigpXG4gICAgICAuYXJyYXkoKVxuICAgICAgLmpvaW4oJywgJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnRyYXN0KGNvbG9yOiBDb2xvcik6IENvbG9yIHtcbiAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLnJnYigpLm9iamVjdCgpO1xuICAgIHJldHVybiAociArIGcgKyBiKSAvIDMgPiAxMjggPyBDb2xvcignI2ZmZicpIDogQ29sb3IoJyMwMDAnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hhZGUoY29sb3I6IENvbG9yKTogQ29sb3Ige1xuICAgIHJldHVybiBjb2xvci5taXgoQ29sb3IoJyMwMDAnKSwgMC4xMik7XG4gIH1cblxuICBwcml2YXRlIHRpbnQoY29sb3I6IENvbG9yKTogQ29sb3Ige1xuICAgIHJldHVybiBjb2xvci5taXgoQ29sb3IoJyNmZmYnKSwgMC4xKTtcbiAgfVxufVxuIl19