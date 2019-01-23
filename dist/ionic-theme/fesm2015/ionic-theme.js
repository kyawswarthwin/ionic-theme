import { Injectable, Inject, defineInjectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Color from 'color';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class IonicThemeService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    getPropertyValue(propertyName) {
        return window.getComputedStyle(this.document.documentElement).getPropertyValue(propertyName);
    }
    /**
     * @param {?} propertyName
     * @param {?} value
     * @param {?=} priority
     * @return {?}
     */
    setProperty(propertyName, value, priority) {
        this.document.documentElement.style.setProperty(propertyName, value, priority);
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    removeProperty(propertyName) {
        return this.document.documentElement.style.removeProperty(propertyName);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.document.documentElement.style.cssText = Object.entries(this.generateTheme(theme)).reduce((accumulator, [propertyName, value]) => {
            return (accumulator += `${propertyName}: ${value};`);
        }, '');
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
IonicThemeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IonicThemeService.ctorParameters = () => [
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ IonicThemeService.ngInjectableDef = defineInjectable({ factory: function IonicThemeService_Factory() { return new IonicThemeService(inject(DOCUMENT)); }, token: IonicThemeService, providedIn: "root" });

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