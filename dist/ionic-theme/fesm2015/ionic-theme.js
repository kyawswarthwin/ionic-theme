import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import Color from 'color';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StatusBar as StatusBar$1 } from '@ionic-native/status-bar/ngx/index';
import { __awaiter } from 'tslib';
import { Injectable, InjectionToken, Inject, APP_INITIALIZER, NgModule, defineInjectable, inject } from '@angular/core';
import { SettingsService } from 'ionic-settings';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const THEME_CONFIG = new InjectionToken('THEME_CONFIG');
// @dynamic
class ThemeService {
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
/** @nocollapse */ ThemeService.ngInjectableDef = defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(inject(THEME_CONFIG), inject(DOCUMENT), inject(SettingsService), inject(StatusBar$1)); }, token: ThemeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class IonicThemeModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: IonicThemeModule,
            providers: [
                {
                    provide: THEME_CONFIG,
                    useValue: config
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: (settings, theme) => {
                        return () => {
                            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                                yield settings.initialize();
                                yield theme.initialize();
                                resolve();
                            }));
                        };
                    },
                    deps: [SettingsService, ThemeService],
                    multi: true
                }
            ]
        };
    }
}
IonicThemeModule.decorators = [
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { THEME_CONFIG, ThemeService, IonicThemeModule };

//# sourceMappingURL=ionic-theme.js.map