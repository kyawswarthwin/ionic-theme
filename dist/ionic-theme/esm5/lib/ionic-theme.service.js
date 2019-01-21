/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Color from 'color';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
    IonicColors.prototype.dark;
    /** @type {?|undefined} */
    IonicColors.prototype.medium;
    /** @type {?|undefined} */
    IonicColors.prototype.light;
    /** @type {?|undefined} */
    IonicColors.prototype.backgroundColor;
    /** @type {?|undefined} */
    IonicColors.prototype.textColor;
}
/**
 * @record
 */
export function CustomProperties() { }
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
            var _b = tslib_1.__read(_a, 1), name = _b[0];
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
            var _b = tslib_1.__read(_a, 2), name = _b[0], color = _b[1];
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
            var _b = tslib_1.__read(_a, 2), propertyName = _b[0], value = _b[1];
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
    /** @nocollapse */ IonicThemeService.ngInjectableDef = i0.defineInjectable({ factory: function IonicThemeService_Factory() { return new IonicThemeService(i0.inject(i1.DOCUMENT)); }, token: IonicThemeService, providedIn: "root" });
    return IonicThemeService;
}());
export { IonicThemeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonicThemeService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2lvbmljLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDOzs7Ozs7QUFFMUIsaUNBWUM7OztJQVhDLDhCQUFpQjs7SUFDakIsZ0NBQW1COztJQUNuQiwrQkFBa0I7O0lBQ2xCLDhCQUFpQjs7SUFDakIsOEJBQWlCOztJQUNqQiw2QkFBZ0I7O0lBQ2hCLDJCQUFjOztJQUNkLDZCQUFnQjs7SUFDaEIsNEJBQWU7O0lBQ2Ysc0NBQXlCOztJQUN6QixnQ0FBbUI7Ozs7O0FBRXJCLHNDQUVDOztBQUdEO0lBSUUsMkJBQXNDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7OztJQUU1RCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsWUFBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7OztJQUVELHVDQUFXOzs7Ozs7SUFBWCxVQUFZLFlBQW9CLEVBQUUsS0FBb0IsRUFBRSxRQUF3QjtRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsWUFBb0I7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlB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LFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFFaUQsUUFBUSx1QkFBM0MsTUFBTSxTQUFDLFFBQVE7Ozs0QkExQjlCO0NBNkhDLEFBdkdELElBdUdDO1NBcEdZLGlCQUFpQjs7Ozs7O0lBQ2hCLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElvbmljQ29sb3JzIHtcclxuICBwcmltYXJ5Pzogc3RyaW5nO1xyXG4gIHNlY29uZGFyeT86IHN0cmluZztcclxuICB0ZXJ0aWFyeT86IHN0cmluZztcclxuICBzdWNjZXNzPzogc3RyaW5nO1xyXG4gIHdhcm5pbmc/OiBzdHJpbmc7XHJcbiAgZGFuZ2VyPzogc3RyaW5nO1xyXG4gIGRhcms/OiBzdHJpbmc7XHJcbiAgbWVkaXVtPzogc3RyaW5nO1xyXG4gIGxpZ2h0Pzogc3RyaW5nO1xyXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21Qcm9wZXJ0aWVzIHtcclxuICBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEBkeW5hbWljXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbmljVGhlbWVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCkge31cclxuXHJcbiAgZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBwcmlvcml0eT86IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGhlbWUoY29sb3JzPzogSW9uaWNDb2xvcnMsIHByb3BlcnRpZXM/OiBDdXN0b21Qcm9wZXJ0aWVzKTogdm9pZCB7XHJcbiAgICBjb25zdCBjc3MgPSBgJHt0aGlzLmdlbmVyYXRlQ29sb3IoY29sb3JzKX1cclxuJHt0aGlzLmdlbmVyYXRlQ29sb3JTdGVwcyhjb2xvcnMuYmFja2dyb3VuZENvbG9yLCBjb2xvcnMudGV4dENvbG9yKX1cclxuJHt0aGlzLmdlbmVyYXRlQ3VzdG9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKX1gO1xyXG4gICAgdGhpcy5zZXRHbG9iYWxDU1MoY3NzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVDb2xvcihjb2xvcnM6IElvbmljQ29sb3JzKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjb2xvcnMgfHwge30pXHJcbiAgICAgIC5maWx0ZXIoKFtuYW1lXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IFtcclxuICAgICAgICAgICdwcmltYXJ5JyxcclxuICAgICAgICAgICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgJ3RlcnRpYXJ5JyxcclxuICAgICAgICAgICdzdWNjZXNzJyxcclxuICAgICAgICAgICd3YXJuaW5nJyxcclxuICAgICAgICAgICdkYW5nZXInLFxyXG4gICAgICAgICAgJ2RhcmsnLFxyXG4gICAgICAgICAgJ21lZGl1bScsXHJcbiAgICAgICAgICAnbGlnaHQnXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyLmluZGV4T2YobmFtZSkgPiAtMTtcclxuICAgICAgfSlcclxuICAgICAgLm1hcCgoW25hbWUsIGNvbG9yXSkgPT4ge1xyXG4gICAgICAgIGNvbG9yID0gQ29sb3IoY29sb3IpO1xyXG4gICAgICAgIHJldHVybiBgLS1pb24tY29sb3ItJHtuYW1lfTogJHtjb2xvci5oZXgoKX07XHJcbi0taW9uLWNvbG9yLSR7bmFtZX0tcmdiOiAke3RoaXMuY29sb3JUb1JHQihjb2xvcil9O1xyXG4tLWlvbi1jb2xvci0ke25hbWV9LWNvbnRyYXN0OiAke3RoaXMuY29udHJhc3QoY29sb3IpLmhleCgpfTtcclxuLS1pb24tY29sb3ItJHtuYW1lfS1jb250cmFzdC1yZ2I6ICR7dGhpcy5jb2xvclRvUkdCKHRoaXMuY29udHJhc3QoY29sb3IpKX07XHJcbi0taW9uLWNvbG9yLSR7bmFtZX0tc2hhZGU6ICR7dGhpcy5zaGFkZShjb2xvcikuaGV4KCl9O1xyXG4tLWlvbi1jb2xvci0ke25hbWV9LXRpbnQ6ICR7dGhpcy50aW50KGNvbG9yKS5oZXgoKX07XHJcbmA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCdcXG4nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sb3JUb1JHQihjb2xvcjogQ29sb3IpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbG9yXHJcbiAgICAgIC5yZ2IoKVxyXG4gICAgICAuYXJyYXkoKVxyXG4gICAgICAuam9pbignLCAnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udHJhc3QoY29sb3I6IENvbG9yKTogQ29sb3Ige1xyXG4gICAgY29uc3QgeyByLCBnLCBiIH0gPSBjb2xvci5yZ2IoKS5vYmplY3QoKTtcclxuICAgIHJldHVybiAociArIGcgKyBiKSAvIDMgPiAxMjggPyBDb2xvcignI2ZmZicpIDogQ29sb3IoJyMwMDAnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hhZGUoY29sb3I6IENvbG9yKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIGNvbG9yLm1peChDb2xvcignIzAwMCcpLCAwLjEyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGludChjb2xvcjogQ29sb3IpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gY29sb3IubWl4KENvbG9yKCcjZmZmJyksIDAuMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlQ29sb3JTdGVwcyhiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyB8IENvbG9yLCB0ZXh0Q29sb3I6IHN0cmluZyB8IENvbG9yKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgJiYgdGV4dENvbG9yKSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IENvbG9yKGJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgIHRleHRDb2xvciA9IENvbG9yKHRleHRDb2xvcik7XHJcbiAgICAgIHJlc3VsdCArPSBgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3IuaGV4KCl9O1xyXG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogJHt0aGlzLmNvbG9yVG9SR0IoYmFja2dyb3VuZENvbG9yKX07XHJcbi0taW9uLXRleHQtY29sb3I6ICR7dGV4dENvbG9yLmhleCgpfTtcclxuLS1pb24tdGV4dC1jb2xvci1yZ2I6ICR7dGhpcy5jb2xvclRvUkdCKHRleHRDb2xvcil9O1xyXG5gO1xyXG4gICAgICBmb3IgKGxldCBpID0gNTA7IGkgPCAxMDAwOyBpICs9IDUwKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAtLWlvbi1jb2xvci1zdGVwLSR7aX06ICR7dGV4dENvbG9yLm1peChiYWNrZ3JvdW5kQ29sb3IsIDEgLSBpIC8gMTAwMCkuaGV4KCl9O1xyXG5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRHbG9iYWxDU1MoY3NzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3M7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlQ3VzdG9tUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBDdXN0b21Qcm9wZXJ0aWVzKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzIHx8IHt9KVxyXG4gICAgICAubWFwKChbcHJvcGVydHlOYW1lLCB2YWx1ZV0pID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7cHJvcGVydHlOYW1lfTogJHt2YWx1ZX07YDtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxufVxyXG4iXX0=