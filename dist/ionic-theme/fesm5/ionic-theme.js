import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import Color from 'color';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StatusBar as StatusBar$1 } from '@ionic-native/status-bar/ngx/index';
import { __awaiter, __generator, __read, __assign } from 'tslib';
import { Injectable, InjectionToken, Inject, APP_INITIALIZER, NgModule, defineInjectable, inject } from '@angular/core';
import { SettingsService } from 'ionic-settings';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var THEME_CONFIG = new InjectionToken('THEME_CONFIG');
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
            var _b = __read(_a, 2), propertyName = _b[0], value = _b[1];
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
        var properties = __assign({}, theme.properties);
        if (theme.colors) {
            properties = __assign({}, properties, Object.entries(theme.colors)
                .filter(function (_a) {
                var _b = __read(_a, 1), name = _b[0];
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
                var _b = __read(_a, 2), name = _b[0], color = _b[1];
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
                return __assign({}, accumulator, currentValue);
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
    /** @nocollapse */ ThemeService.ngInjectableDef = defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(inject(THEME_CONFIG), inject(DOCUMENT), inject(SettingsService), inject(StatusBar$1)); }, token: ThemeService, providedIn: "root" });
    return ThemeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var IonicThemeModule = /** @class */ (function () {
    function IonicThemeModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    IonicThemeModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return {
            ngModule: IonicThemeModule,
            providers: [
                {
                    provide: THEME_CONFIG,
                    useValue: config
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: function (settings, theme) {
                        return function () {
                            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, settings.initialize()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, theme.initialize()];
                                        case 2:
                                            _a.sent();
                                            resolve();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        };
                    },
                    deps: [SettingsService, ThemeService],
                    multi: true
                }
            ]
        };
    };
    IonicThemeModule.decorators = [
        { type: NgModule }
    ];
    return IonicThemeModule;
}());

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