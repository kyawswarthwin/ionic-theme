/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IonicThemeService {
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
/** @nocollapse */ IonicThemeService.ngInjectableDef = i0.defineInjectable({ factory: function IonicThemeService_Factory() { return new IonicThemeService(i0.inject(i1.DOCUMENT)); }, token: IonicThemeService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonicThemeService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2lvbmljLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7Ozs7OztBQUUxQiwyQkFHQzs7O0lBRkMsdUJBQXFCOztJQUNyQiwyQkFBd0I7Ozs7O0FBRTFCLGlDQVlDOzs7SUFYQyw4QkFBaUI7O0lBQ2pCLGdDQUFtQjs7SUFDbkIsK0JBQWtCOztJQUNsQiw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsNkJBQWdCOztJQUNoQiwyQkFBYzs7SUFDZCw2QkFBZ0I7O0lBQ2hCLDRCQUFlOztJQUNmLGlDQUFvQjs7SUFDcEIsaUNBQW9COzs7OztBQUV0QixnQ0FFQzs7QUFNRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQXNDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7OztJQUU1RCxnQkFBZ0IsQ0FBQyxZQUFvQjtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7Ozs7SUFFRCxXQUFXLENBQUMsWUFBb0IsRUFBRSxLQUFvQixFQUFFLFFBQXdCO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxZQUFvQjtRQUNqQyxPQUFPLElB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QU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQWhHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFFaUQsUUFBUSx1QkFBM0MsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBQWhCLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lIHtcclxuICBjb2xvcnM/OiBJb25pY0NvbG9ycztcclxuICBwcm9wZXJ0aWVzPzogUHJvcGVydGllcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElvbmljQ29sb3JzIHtcclxuICBwcmltYXJ5Pzogc3RyaW5nO1xyXG4gIHNlY29uZGFyeT86IHN0cmluZztcclxuICB0ZXJ0aWFyeT86IHN0cmluZztcclxuICBzdWNjZXNzPzogc3RyaW5nO1xyXG4gIHdhcm5pbmc/OiBzdHJpbmc7XHJcbiAgZGFuZ2VyPzogc3RyaW5nO1xyXG4gIGRhcms/OiBzdHJpbmc7XHJcbiAgbWVkaXVtPzogc3RyaW5nO1xyXG4gIGxpZ2h0Pzogc3RyaW5nO1xyXG4gIGZvcmVncm91bmQ/OiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZD86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnRpZXMge1xyXG4gIFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZztcclxufVxyXG5cclxuLy8gQGR5bmFtaWNcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW9uaWNUaGVtZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50KSB7fVxyXG5cclxuICBnZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBwcmlvcml0eT86IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0VGhlbWUodGhlbWU6IFRoZW1lKTogdm9pZCB7XHJcbiAgICB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gT2JqZWN0LmVudHJpZXModGhpcy5nZW5lcmF0ZVRoZW1lKHRoZW1lKSkucmVkdWNlKFxyXG4gICAgICAoYWNjdW11bGF0b3IsIFtwcm9wZXJ0eU5hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoYWNjdW11bGF0b3IgKz0gYCR7cHJvcGVydHlOYW1lfTogJHt2YWx1ZX07YCk7XHJcbiAgICAgIH0sXHJcbiAgICAgICcnXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVRoZW1lKHRoZW1lOiBUaGVtZSk6IFByb3BlcnRpZXMge1xyXG4gICAgbGV0IHByb3BlcnRpZXMgPSB7IC4uLnRoZW1lLnByb3BlcnRpZXMgfTtcclxuICAgIGlmICh0aGVtZS5jb2xvcnMpIHtcclxuICAgICAgcHJvcGVydGllcyA9IHtcclxuICAgICAgICAuLi5wcm9wZXJ0aWVzLFxyXG4gICAgICAgIC4uLk9iamVjdC5lbnRyaWVzKHRoZW1lLmNvbG9ycylcclxuICAgICAgICAgIC5maWx0ZXIoKFtuYW1lXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAndGVydGlhcnknLFxyXG4gICAgICAgICAgICAgICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgJ2RhcmsnLFxyXG4gICAgICAgICAgICAgICdtZWRpdW0nLFxyXG4gICAgICAgICAgICAgICdsaWdodCdcclxuICAgICAgICAgICAgXS5pbmNsdWRlcyhuYW1lKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAubWFwKChbbmFtZSwgY29sb3JdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gQ29sb3IoY29sb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfWBdOiBjb2xvci5oZXgoKSxcclxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX0tcmdiYF06IHRoaXMuY29sb3JUb1JHQihjb2xvciksXHJcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9LWNvbnRyYXN0YF06IHRoaXMuY29udHJhc3QoY29sb3IpLmhleCgpLFxyXG4gICAgICAgICAgICAgIFtgLS1pb24tY29sb3ItJHtuYW1lfS1jb250cmFzdC1yZ2JgXTogdGhpcy5jb2xvclRvUkdCKHRoaXMuY29udHJhc3QoY29sb3IpKSxcclxuICAgICAgICAgICAgICBbYC0taW9uLWNvbG9yLSR7bmFtZX0tc2hhZGVgXTogdGhpcy5zaGFkZShjb2xvcikuaGV4KCksXHJcbiAgICAgICAgICAgICAgW2AtLWlvbi1jb2xvci0ke25hbWV9LXRpbnRgXTogdGhpcy50aW50KGNvbG9yKS5oZXgoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWNjdW11bGF0b3IsIC4uLmN1cnJlbnRWYWx1ZSB9O1xyXG4gICAgICAgICAgfSwge30pXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0aGVtZS5jb2xvcnMuYmFja2dyb3VuZCAmJiB0aGVtZS5jb2xvcnMuZm9yZWdyb3VuZCkge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IENvbG9yKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kKTtcclxuICAgICAgICBjb25zdCBmb3JlZ3JvdW5kQ29sb3IgPSBDb2xvcih0aGVtZS5jb2xvcnMuZm9yZWdyb3VuZCk7XHJcbiAgICAgICAgcHJvcGVydGllc1tgLS1pb24tYmFja2dyb3VuZC1jb2xvcmBdID0gYmFja2dyb3VuZENvbG9yLmhleCgpO1xyXG4gICAgICAgIHByb3BlcnRpZXNbYC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiYF0gPSB0aGlzLmNvbG9yVG9SR0IoYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICBwcm9wZXJ0aWVzW2AtLWlvbi10ZXh0LWNvbG9yYF0gPSBmb3JlZ3JvdW5kQ29sb3IuaGV4KCk7XHJcbiAgICAgICAgcHJvcGVydGllc1tgLS1pb24tdGV4dC1jb2xvci1yZ2JgXSA9IHRoaXMuY29sb3JUb1JHQihmb3JlZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSA1MDsgaSA8IDEwMDA7IGkgKz0gNTApIHtcclxuICAgICAgICAgIHByb3BlcnRpZXNbYC0taW9uLWNvbG9yLXN0ZXAtJHtpfWBdID0gZm9yZWdyb3VuZENvbG9yXHJcbiAgICAgICAgICAgIC5taXgoYmFja2dyb3VuZENvbG9yLCAxIC0gaSAvIDEwMDApXHJcbiAgICAgICAgICAgIC5oZXgoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xvclRvUkdCKGNvbG9yOiBDb2xvcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29sb3JcclxuICAgICAgLnJnYigpXHJcbiAgICAgIC5hcnJheSgpXHJcbiAgICAgIC5qb2luKCcsICcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb250cmFzdChjb2xvcjogQ29sb3IpOiBDb2xvciB7XHJcbiAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLnJnYigpLm9iamVjdCgpO1xyXG4gICAgcmV0dXJuIChyICsgZyArIGIpIC8gMyA+IDEyOCA/IENvbG9yKCcjZmZmJykgOiBDb2xvcignIzAwMCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaGFkZShjb2xvcjogQ29sb3IpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gY29sb3IubWl4KENvbG9yKCcjMDAwJyksIDAuMTIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0aW50KGNvbG9yOiBDb2xvcik6IENvbG9yIHtcclxuICAgIHJldHVybiBjb2xvci5taXgoQ29sb3IoJyNmZmYnKSwgMC4xKTtcclxuICB9XHJcbn1cclxuIl19