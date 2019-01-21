import { __read } from 'tslib';
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
        return this.document.documentElement.style.getPropertyValue(propertyName);
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
     * @param {?=} colors
     * @param {?=} properties
     * @return {?}
     */
    IonicThemeService.prototype.setTheme = /**
     * @param {?=} colors
     * @param {?=} properties
     * @return {?}
     */
    function (colors, properties) {
        /** @type {?} */
        var css = this.generateColor(colors) + "\n" + this.generateColorSteps(colors.backgroundColor, colors.textColor) + "\n" + this.generateCustomProperties(properties);
        this.setGlobalCSS(css);
    };
    /**
     * @private
     * @param {?} colors
     * @return {?}
     */
    IonicThemeService.prototype.generateColor = /**
     * @private
     * @param {?} colors
     * @return {?}
     */
    function (colors) {
        var _this = this;
        return Object.entries(colors || {})
            .filter(function (_a) {
            var _b = __read(_a, 1), name = _b[0];
            /** @type {?} */
            var filter = [
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
            .map(function (_a) {
            var _b = __read(_a, 2), name = _b[0], color = _b[1];
            color = Color(color);
            return "--ion-color-" + name + ": " + color.hex() + ";\n--ion-color-" + name + "-rgb: " + _this.colorToRGB(color) + ";\n--ion-color-" + name + "-contrast: " + _this.contrast(color).hex() + ";\n--ion-color-" + name + "-contrast-rgb: " + _this.colorToRGB(_this.contrast(color)) + ";\n--ion-color-" + name + "-shade: " + _this.shade(color).hex() + ";\n--ion-color-" + name + "-tint: " + _this.tint(color).hex() + ";\n";
        })
            .join('\n');
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
    /**
     * @private
     * @param {?} backgroundColor
     * @param {?} textColor
     * @return {?}
     */
    IonicThemeService.prototype.generateColorSteps = /**
     * @private
     * @param {?} backgroundColor
     * @param {?} textColor
     * @return {?}
     */
    function (backgroundColor, textColor) {
        /** @type {?} */
        var result = '';
        if (backgroundColor && textColor) {
            backgroundColor = Color(backgroundColor);
            textColor = Color(textColor);
            result += "--ion-background-color: " + backgroundColor.hex() + ";\n--ion-background-color-rgb: " + this.colorToRGB(backgroundColor) + ";\n--ion-text-color: " + textColor.hex() + ";\n--ion-text-color-rgb: " + this.colorToRGB(textColor) + ";\n";
            for (var i = 50; i < 1000; i += 50) {
                result += "--ion-color-step-" + i + ": " + textColor.mix(backgroundColor, 1 - i / 1000).hex() + ";\n";
            }
        }
        return result;
    };
    /**
     * @private
     * @param {?} css
     * @return {?}
     */
    IonicThemeService.prototype.setGlobalCSS = /**
     * @private
     * @param {?} css
     * @return {?}
     */
    function (css) {
        this.document.documentElement.style.cssText = css;
    };
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    IonicThemeService.prototype.generateCustomProperties = /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    function (properties) {
        return Object.entries(properties || {})
            .map(function (_a) {
            var _b = __read(_a, 2), propertyName = _b[0], value = _b[1];
            return propertyName + ": " + value + ";";
        })
            .join('\n');
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