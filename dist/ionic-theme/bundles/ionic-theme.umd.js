(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('rxjs'), require('color'), require('@ionic-native/status-bar/ngx'), require('@ionic-native/status-bar/ngx/index'), require('@angular/core'), require('ionic-settings')) :
    typeof define === 'function' && define.amd ? define('ionic-theme', ['exports', '@angular/common', 'rxjs', 'color', '@ionic-native/status-bar/ngx', '@ionic-native/status-bar/ngx/index', '@angular/core', 'ionic-settings'], factory) :
    (factory((global['ionic-theme'] = {}),global.ng.common,global.rxjs,global.Color,global.ngx,global.i3,global.ng.core,global.i2));
}(this, (function (exports,i1,rxjs,Color,ngx,i3,i0,i2) { 'use strict';

    Color = Color && Color.hasOwnProperty('default') ? Color['default'] : Color;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var THEME_CONFIG = new i0.InjectionToken('THEME_CONFIG');
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
                        _this.theme = new rxjs.BehaviorSubject(_this.getTheme(_this.settings.get('theme', _this.config.defaultTheme)));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ThemeService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [THEME_CONFIG,] }] },
                { type: Document, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i2.SettingsService },
                { type: ngx.StatusBar }
            ];
        };
        /** @nocollapse */ ThemeService.ngInjectableDef = i0.defineInjectable({ factory: function ThemeService_Factory() { return new ThemeService(i0.inject(THEME_CONFIG), i0.inject(i1.DOCUMENT), i0.inject(i2.SettingsService), i0.inject(i3.StatusBar)); }, token: ThemeService, providedIn: "root" });
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
                            provide: i0.APP_INITIALIZER,
                            useFactory: function (settings, theme) {
                                return function () {
                                    return new Promise(function (resolve, reject) {
                                        return __awaiter(_this, void 0, void 0, function () {
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
                                        });
                                    });
                                };
                            },
                            deps: [i2.SettingsService, ThemeService],
                            multi: true
                        }
                    ]
                };
            };
        IonicThemeModule.decorators = [
            { type: i0.NgModule }
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

    exports.THEME_CONFIG = THEME_CONFIG;
    exports.ThemeService = ThemeService;
    exports.IonicThemeModule = IonicThemeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionic-theme.umd.js.map