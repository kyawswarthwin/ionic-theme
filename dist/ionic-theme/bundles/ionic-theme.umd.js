(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('color')) :
    typeof define === 'function' && define.amd ? define('ionic-theme', ['exports', '@angular/core', '@angular/common', 'color'], factory) :
    (factory((global['ionic-theme'] = {}),global.ng.core,global.ng.common,global.Color));
}(this, (function (exports,i0,i1,Color) { 'use strict';

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
    // @dynamic
    var IonicThemeService = /** @class */ (function () {
        function IonicThemeService(document) {
            this.document = document;
        }
        /**
         * @param {?} propertyName
         * @return {?}
         */
        IonicThemeService.prototype.getPropertyValue = /**
         * @param {?} propertyName
         * @return {?}
         */
            function (propertyName) {
                return window.getComputedStyle(this.document.documentElement).getPropertyValue(propertyName);
            };
        /**
         * @param {?} propertyName
         * @param {?} value
         * @param {?=} priority
         * @return {?}
         */
        IonicThemeService.prototype.setProperty = /**
         * @param {?} propertyName
         * @param {?} value
         * @param {?=} priority
         * @return {?}
         */
            function (propertyName, value, priority) {
                this.document.documentElement.style.setProperty(propertyName, value, priority);
            };
        /**
         * @param {?} propertyName
         * @return {?}
         */
        IonicThemeService.prototype.removeProperty = /**
         * @param {?} propertyName
         * @return {?}
         */
            function (propertyName) {
                return this.document.documentElement.style.removeProperty(propertyName);
            };
        /**
         * @param {?} theme
         * @return {?}
         */
        IonicThemeService.prototype.setTheme = /**
         * @param {?} theme
         * @return {?}
         */
            function (theme) {
                this.document.documentElement.style.cssText = Object.entries(this.generateTheme(theme)).reduce(function (accumulator, _a) {
                    var _b = __read(_a, 2), propertyName = _b[0], value = _b[1];
                    return (accumulator += propertyName + ": " + value + ";");
                }, '');
            };
        /**
         * @private
         * @param {?} theme
         * @return {?}
         */
        IonicThemeService.prototype.generateTheme = /**
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
                            'dark',
                            'medium',
                            'light'
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
        IonicThemeService.prototype.colorToRGB = /**
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
        IonicThemeService.prototype.contrast = /**
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
        IonicThemeService.prototype.shade = /**
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
        IonicThemeService.prototype.tint = /**
         * @private
         * @param {?} color
         * @return {?}
         */
            function (color) {
                return color.mix(Color('#fff'), 0.1);
            };
        IonicThemeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        IonicThemeService.ctorParameters = function () {
            return [
                { type: Document, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ IonicThemeService.ngInjectableDef = i0.defineInjectable({ factory: function IonicThemeService_Factory() { return new IonicThemeService(i0.inject(i1.DOCUMENT)); }, token: IonicThemeService, providedIn: "root" });
        return IonicThemeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.IonicThemeService = IonicThemeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionic-theme.umd.js.map