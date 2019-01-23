import { __read, __assign } from 'tslib';
import { Injectable, Inject, defineInjectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Color from 'color';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IonicThemeService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ IonicThemeService.ngInjectableDef = defineInjectable({ factory: function IonicThemeService_Factory() { return new IonicThemeService(inject(DOCUMENT)); }, token: IonicThemeService, providedIn: "root" });
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

export { IonicThemeService };

//# sourceMappingURL=ionic-theme.js.map