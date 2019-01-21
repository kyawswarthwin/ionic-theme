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
        return this.document.documentElement.style.getPropertyValue(propertyName);
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
     * @param {?=} colors
     * @param {?=} properties
     * @return {?}
     */
    setTheme(colors, properties) {
        /** @type {?} */
        const css = `${this.generateColor(colors)}
${this.generateColorSteps(colors.backgroundColor, colors.textColor)}
${this.generateCustomProperties(properties)}`;
        this.setGlobalCSS(css);
    }
    /**
     * @private
     * @param {?} colors
     * @return {?}
     */
    generateColor(colors) {
        return Object.entries(colors || {})
            .filter(([name]) => {
            /** @type {?} */
            const filter = [
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
            .map(([name, color]) => {
            color = Color(color);
            return `--ion-color-${name}: ${color.hex()};
--ion-color-${name}-rgb: ${this.colorToRGB(color)};
--ion-color-${name}-contrast: ${this.contrast(color).hex()};
--ion-color-${name}-contrast-rgb: ${this.colorToRGB(this.contrast(color))};
--ion-color-${name}-shade: ${this.shade(color).hex()};
--ion-color-${name}-tint: ${this.tint(color).hex()};
`;
        })
            .join('\n');
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
    /**
     * @private
     * @param {?} backgroundColor
     * @param {?} textColor
     * @return {?}
     */
    generateColorSteps(backgroundColor, textColor) {
        /** @type {?} */
        let result = '';
        if (backgroundColor && textColor) {
            backgroundColor = Color(backgroundColor);
            textColor = Color(textColor);
            result += `--ion-background-color: ${backgroundColor.hex()};
--ion-background-color-rgb: ${this.colorToRGB(backgroundColor)};
--ion-text-color: ${textColor.hex()};
--ion-text-color-rgb: ${this.colorToRGB(textColor)};
`;
            for (let i = 50; i < 1000; i += 50) {
                result += `--ion-color-step-${i}: ${textColor.mix(backgroundColor, 1 - i / 1000).hex()};
`;
            }
        }
        return result;
    }
    /**
     * @private
     * @param {?} css
     * @return {?}
     */
    setGlobalCSS(css) {
        this.document.documentElement.style.cssText = css;
    }
    /**
     * @private
     * @param {?} properties
     * @return {?}
     */
    generateCustomProperties(properties) {
        return Object.entries(properties || {})
            .map(([propertyName, value]) => {
            return `${propertyName}: ${value};`;
        })
            .join('\n');
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