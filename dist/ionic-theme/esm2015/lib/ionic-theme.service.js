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
/** @nocollapse */ IonicThemeService.ngInjectableDef = i0.defineInjectable({ factory: function IonicThemeService_Factory() { return new IonicThemeService(i0.inject(i1.DOCUMENT)); }, token: IonicThemeService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonicThemeService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXRoZW1lLyIsInNvdXJjZXMiOlsibGliL2lvbmljLXRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7Ozs7OztBQUUxQixpQ0FZQzs7O0lBWEMsOEJBQWlCOztJQUNqQixnQ0FBbUI7O0lBQ25CLCtCQUFrQjs7SUFDbEIsOEJBQWlCOztJQUNqQiw4QkFBaUI7O0lBQ2pCLDZCQUFnQjs7SUFDaEIsMkJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiw0QkFBZTs7SUFDZixzQ0FBeUI7O0lBQ3pCLGdDQUFtQjs7Ozs7QUFFckIsc0NBRUM7O0FBTUQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUM1QixZQUFzQyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7SUFFNUQsZ0JBQWdCLENBQUMsWUFBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxZQUFvQixFQUFFLEtBQW9CLEVBQUUsUUFBd0I7UUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFlBQW9CO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FB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aW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IENvbG9yIGZyb20gJ2NvbG9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW9uaWNDb2xvcnMge1xyXG4gIHByaW1hcnk/OiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5Pzogc3RyaW5nO1xyXG4gIHRlcnRpYXJ5Pzogc3RyaW5nO1xyXG4gIHN1Y2Nlc3M/OiBzdHJpbmc7XHJcbiAgd2FybmluZz86IHN0cmluZztcclxuICBkYW5nZXI/OiBzdHJpbmc7XHJcbiAgZGFyaz86IHN0cmluZztcclxuICBtZWRpdW0/OiBzdHJpbmc7XHJcbiAgbGlnaHQ/OiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gIHRleHRDb2xvcj86IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVByb3BlcnRpZXMge1xyXG4gIFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZztcclxufVxyXG5cclxuLy8gQGR5bmFtaWNcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW9uaWNUaGVtZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50KSB7fVxyXG5cclxuICBnZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bGwsIHByaW9yaXR5Pzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSwgcHJpb3JpdHkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5TmFtZSk7XHJcbiAgfVxyXG5cclxuICBzZXRUaGVtZShjb2xvcnM/OiBJb25pY0NvbG9ycywgcHJvcGVydGllcz86IEN1c3RvbVByb3BlcnRpZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNzcyA9IGAke3RoaXMuZ2VuZXJhdGVDb2xvcihjb2xvcnMpfVxyXG4ke3RoaXMuZ2VuZXJhdGVDb2xvclN0ZXBzKGNvbG9ycy5iYWNrZ3JvdW5kQ29sb3IsIGNvbG9ycy50ZXh0Q29sb3IpfVxyXG4ke3RoaXMuZ2VuZXJhdGVDdXN0b21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpfWA7XHJcbiAgICB0aGlzLnNldEdsb2JhbENTUyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZUNvbG9yKGNvbG9yczogSW9uaWNDb2xvcnMpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNvbG9ycyB8fCB7fSlcclxuICAgICAgLmZpbHRlcigoW25hbWVdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gW1xyXG4gICAgICAgICAgJ3ByaW1hcnknLFxyXG4gICAgICAgICAgJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAndGVydGlhcnknLFxyXG4gICAgICAgICAgJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgJ2RhbmdlcicsXHJcbiAgICAgICAgICAnZGFyaycsXHJcbiAgICAgICAgICAnbWVkaXVtJyxcclxuICAgICAgICAgICdsaWdodCdcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXIuaW5kZXhPZihuYW1lKSA+IC0xO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKChbbmFtZSwgY29sb3JdKSA9PiB7XHJcbiAgICAgICAgY29sb3IgPSBDb2xvcihjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGAtLWlvbi1jb2xvci0ke25hbWV9OiAke2NvbG9yLmhleCgpfTtcclxuLS1pb24tY29sb3ItJHtuYW1lfS1yZ2I6ICR7dGhpcy5jb2xvclRvUkdCKGNvbG9yKX07XHJcbi0taW9uLWNvbG9yLSR7bmFtZX0tY29udHJhc3Q6ICR7dGhpcy5jb250cmFzdChjb2xvcikuaGV4KCl9O1xyXG4tLWlvbi1jb2xvci0ke25hbWV9LWNvbnRyYXN0LXJnYjogJHt0aGlzLmNvbG9yVG9SR0IodGhpcy5jb250cmFzdChjb2xvcikpfTtcclxuLS1pb24tY29sb3ItJHtuYW1lfS1zaGFkZTogJHt0aGlzLnNoYWRlKGNvbG9yKS5oZXgoKX07XHJcbi0taW9uLWNvbG9yLSR7bmFtZX0tdGludDogJHt0aGlzLnRpbnQoY29sb3IpLmhleCgpfTtcclxuYDtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJ1xcbicpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xvclRvUkdCKGNvbG9yOiBDb2xvcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gY29sb3JcclxuICAgICAgLnJnYigpXHJcbiAgICAgIC5hcnJheSgpXHJcbiAgICAgIC5qb2luKCcsICcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb250cmFzdChjb2xvcjogQ29sb3IpOiBDb2xvciB7XHJcbiAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbG9yLnJnYigpLm9iamVjdCgpO1xyXG4gICAgcmV0dXJuIChyICsgZyArIGIpIC8gMyA+IDEyOCA/IENvbG9yKCcjZmZmJykgOiBDb2xvcignIzAwMCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaGFkZShjb2xvcjogQ29sb3IpOiBDb2xvciB7XHJcbiAgICByZXR1cm4gY29sb3IubWl4KENvbG9yKCcjMDAwJyksIDAuMTIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0aW50KGNvbG9yOiBDb2xvcik6IENvbG9yIHtcclxuICAgIHJldHVybiBjb2xvci5taXgoQ29sb3IoJyNmZmYnKSwgMC4xKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVDb2xvclN0ZXBzKGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgQ29sb3IsIHRleHRDb2xvcjogc3RyaW5nIHwgQ29sb3IpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKGJhY2tncm91bmRDb2xvciAmJiB0ZXh0Q29sb3IpIHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yID0gQ29sb3IoYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgdGV4dENvbG9yID0gQ29sb3IodGV4dENvbG9yKTtcclxuICAgICAgcmVzdWx0ICs9IGAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvci5oZXgoKX07XHJcbi0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAke3RoaXMuY29sb3JUb1JHQihiYWNrZ3JvdW5kQ29sb3IpfTtcclxuLS1pb24tdGV4dC1jb2xvcjogJHt0ZXh0Q29sb3IuaGV4KCl9O1xyXG4tLWlvbi10ZXh0LWNvbG9yLXJnYjogJHt0aGlzLmNvbG9yVG9SR0IodGV4dENvbG9yKX07XHJcbmA7XHJcbiAgICAgIGZvciAobGV0IGkgPSA1MDsgaSA8IDEwMDA7IGkgKz0gNTApIHtcclxuICAgICAgICByZXN1bHQgKz0gYC0taW9uLWNvbG9yLXN0ZXAtJHtpfTogJHt0ZXh0Q29sb3IubWl4KGJhY2tncm91bmRDb2xvciwgMSAtIGkgLyAxMDAwKS5oZXgoKX07XHJcbmA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEdsb2JhbENTUyhjc3M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuZXJhdGVDdXN0b21Qcm9wZXJ0aWVzKHByb3BlcnRpZXM6IEN1c3RvbVByb3BlcnRpZXMpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHByb3BlcnRpZXMgfHwge30pXHJcbiAgICAgIC5tYXAoKFtwcm9wZXJ0eU5hbWUsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHtwcm9wZXJ0eU5hbWV9OiAke3ZhbHVlfTtgO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbignXFxuJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==