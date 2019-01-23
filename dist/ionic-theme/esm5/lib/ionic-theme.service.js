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
export function Theme() { }
if (false) {
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
    IonicColors.prototype.dark;
    /** @type {?|undefined} */
    IonicColors.prototype.medium;
    /** @type {?|undefined} */
    IonicColors.prototype.light;
    /** @type {?|undefined} */
    IonicColors.prototype.foreground;
    /** @type {?|undefined} */
    IonicColors.prototype.background;
}
/**
 * @record
 */
export function Properties() { }
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
            var _b = tslib_1.__read(_a, 2), propertyName = _b[0], value = _b[1];
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
                    'dark',
                    'medium',
                    'light'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2lvbmljLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDOzs7Ozs7QUFFMUIsMkJBR0M7OztJQUZDLHVCQUFxQjs7SUFDckIsMkJBQXdCOzs7OztBQUUxQixpQ0FZQzs7O0lBWEMsOEJBQWlCOztJQUNqQixnQ0FBbUI7O0lBQ25CLCtCQUFrQjs7SUFDbEIsOEJBQWlCOztJQUNqQiw4QkFBaUI7O0lBQ2pCLDZCQUFnQjs7SUFDaEIsMkJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiw0QkFBZTs7SUFDZixpQ0FBb0I7O0lBQ3BCLGlDQUFvQjs7Ozs7QUFFdEIsZ0NBRUM7O0FBR0Q7SUFJRSwyQkFBc0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7Ozs7O0lBRTVELDRDQUFnQjs7OztJQUFoQixVQUFpQixZQUFvQjtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7Ozs7SUFFRCx1Q0FBVzs7Ozs7O0lBQVgsVUFBWSxZQUFvQixFQUFFLEtBQW9CLEVBQUUsUUFBd0I7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLFlBQW9CO1FB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QUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBaEdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBRWlELFFBQVEsdUJBQTNDLE1BQU0sU0FBQyxRQUFROzs7NEJBOUI5QjtDQTJIQyxBQWpHRCxJQWlHQztTQTlGWSxpQkFBaUI7Ozs7OztJQUNoQixxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVtZSB7XHJcbiAgY29sb3JzPzogSW9uaWNDb2xvcnM7XHJcbiAgcHJvcGVydGllcz86IFByb3BlcnRpZXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJb25pY0NvbG9ycyB7XHJcbiAgcHJpbWFyeT86IHN0cmluZztcclxuICBzZWNvbmRhcnk/OiBzdHJpbmc7XHJcbiAgdGVydGlhcnk/OiBzdHJpbmc7XHJcbiAgc3VjY2Vzcz86IHN0cmluZztcclxuICB3YXJuaW5nPzogc3RyaW5nO1xyXG4gIGRhbmdlcj86IHN0cmluZztcclxuICBkYXJrPzogc3RyaW5nO1xyXG4gIG1lZGl1bT86IHN0cmluZztcclxuICBsaWdodD86IHN0cmluZztcclxuICBmb3JlZ3JvdW5kPzogc3RyaW5nO1xyXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0aWVzIHtcclxuICBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEBkeW5hbWljXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbmljVGhlbWVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCkge31cclxuXHJcbiAgZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKTtcclxuICB9XHJcblxyXG4gIHNldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCwgcHJpb3JpdHk/OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcmlvcml0eSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHlOYW1lKTtcclxuICB9XHJcblxyXG4gIHNldFRoZW1lKHRoZW1lOiBUaGVtZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZ2VuZXJhdGVUaGVtZSh0aGVtZSkpLnJlZHVjZShcclxuICAgICAgKGFjY3VtdWxhdG9yLCBbcHJvcGVydHlOYW1lLCB2YWx1ZV0pID0+IHtcclxuICAgICAgICByZXR1cm4gKGFjY3VtdWxhdG9yICs9IGAke3Byb3BlcnR5TmFtZX06ICR7dmFsdWV9O2ApO1xyXG4gICAgICB9LFxyXG4gICAgICAnJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVUaGVtZSh0aGVtZTogVGhlbWUpOiBQcm9wZXJ0aWVzIHtcclxuICAgIGxldCBwcm9wZXJ0aWVzID0geyAuLi50aGVtZS5wcm9wZXJ0aWVzIH07XHJcbiAgICBpZiAodGhlbWUuY29sb3JzKSB7XHJcbiAgICAgIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgLi4ucHJvcGVydGllcyxcclxuICAgICAgICAuLi5PYmplY3QuZW50cmllcyh0aGVtZS5jb2xvcnMpXHJcbiAgICAgICAgICAuZmlsdGVyKChbbmFtZV0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgJ3RlcnRpYXJ5JyxcclxuICAgICAgICAgICAgICAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICAgICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICdkYXJrJyxcclxuICAgICAgICAgICAgICAnbWVkaXVtJyxcclxuICAgICAgICAgICAgICAnbGlnaHQnXHJcbiAgICAgICAgICAgIF0uaW5jbHVkZXMobmFtZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLm1hcCgoW25hbWUsIGNvbG9yXSkgPT4ge1xyXG4gICAgICAgICAgICBjb2xvciA9IENvbG9yKGNvbG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX1gXTogY29sb3IuaGV4KCksXHJcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9LXJnYmBdOiB0aGlzLmNvbG9yVG9SR0IoY29sb3IpLFxyXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfS1jb250cmFzdGBdOiB0aGlzLmNvbnRyYXN0KGNvbG9yKS5oZXgoKSxcclxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX0tY29udHJhc3QtcmdiYF06IHRoaXMuY29sb3JUb1JHQih0aGlzLmNvbnRyYXN0KGNvbG9yKSksXHJcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9LXNoYWRlYF06IHRoaXMuc2hhZGUoY29sb3IpLmhleCgpLFxyXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfS10aW50YF06IHRoaXMudGludChjb2xvcikuaGV4KClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmFjY3VtdWxhdG9yLCAuLi5jdXJyZW50VmFsdWUgfTtcclxuICAgICAgICAgIH0sIHt9KVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodGhlbWUuY29sb3JzLmJhY2tncm91bmQgJiYgdGhlbWUuY29sb3JzLmZvcmVncm91bmQpIHtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBDb2xvcih0aGVtZS5jb2xvcnMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgY29uc3QgZm9yZWdyb3VuZENvbG9yID0gQ29sb3IodGhlbWUuY29sb3JzLmZvcmVncm91bmQpO1xyXG4gICAgICAgIHByb3BlcnRpZXNbYC0taW9uLWJhY2tncm91bmQtY29sb3JgXSA9IGJhY2tncm91bmRDb2xvci5oZXgoKTtcclxuICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYmBdID0gdGhpcy5jb2xvclRvUkdCKGJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgcHJvcGVydGllc1tgLS1pb24tdGV4dC1jb2xvcmBdID0gZm9yZWdyb3VuZENvbG9yLmhleCgpO1xyXG4gICAgICAgIHByb3BlcnRpZXNbYC0taW9uLXRleHQtY29sb3ItcmdiYF0gPSB0aGlzLmNvbG9yVG9SR0IoZm9yZWdyb3VuZENvbG9yKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gNTA7IGkgPCAxMDAwOyBpICs9IDUwKSB7XHJcbiAgICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi1jb2xvci1zdGVwLSR7aX1gXSA9IGZvcmVncm91bmRDb2xvclxyXG4gICAgICAgICAgICAubWl4KGJhY2tncm91bmRDb2xvciwgMSAtIGkgLyAxMDAwKVxyXG4gICAgICAgICAgICAuaGV4KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvcGVydGllcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sb3JUb1JHQihjb2xvcjogQ29sb3IpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbG9yXHJcbiAgICAgIC5yZ2IoKVxyXG4gICAgICAuYXJyYXkoKVxyXG4gICAgICAuam9pbignLCAnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udHJhc3QoY29sb3I6IENvbG9yKTogQ29sb3Ige1xyXG4gICAgY29uc3QgeyByLCBnLCBiIH0gPSBjb2xvci5yZ2IoKS5vYmplY3QoKTtcclxuICAgIHJldHVybiAociArIGcgKyBiKSAvIDMgPiAxMjggPyBDb2xvcignI2ZmZicpIDogQ29sb3IoJyMwMDAnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hhZGUoY29sb3I6IENvbG9yKTogQ29sb3Ige1xyXG4gICAgcmV0dXJuIGNvbG9yLm1peChDb2xvcignIzAwMCcpLCAwLjEyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGludChjb2xvcjogQ29sb3IpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gY29sb3IubWl4KENvbG9yKCcjZmZmJyksIDAuMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==