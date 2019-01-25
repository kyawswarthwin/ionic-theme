/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/storage";
/**
 * @record
 */
export function Settings() { }
export class SettingsService {
    /**
     * @param {?} storage
     */
    constructor(storage) {
        this.storage = storage;
        this.SETTINGS_KEY = '_Settings';
    }
    /**
     * @return {?}
     */
    initialize() {
        return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.settings) {
                this.settings = (yield this.storage.get(this.SETTINGS_KEY)) || {};
            }
            resolve();
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.settings.hasOwnProperty(key);
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.settings;
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    get(key, defaultValue) {
        return this.has(key) ? this.settings[key] : defaultValue;
    }
    /**
     * @param {?} settings
     * @return {?}
     */
    setAll(settings) {
        this.settings = settings;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        this.settings[key] = value;
        return this.setAll(this.settings);
    }
    /**
     * @return {?}
     */
    removeAll() {
        return this.storage.remove(this.SETTINGS_KEY);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        delete this.settings[key];
        return this.setAll(this.settings);
    }
}
SettingsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SettingsService.ctorParameters = () => [
    { type: Storage }
];
/** @nocollapse */ SettingsService.ngInjectableDef = i0.defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(i0.inject(i1.Storage)); }, token: SettingsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype.SETTINGS_KEY;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXNldHRpbmdzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRXpDLDhCQUVDO0FBS0QsTUFBTSxPQUFPLGVBQWU7Ozs7SUFJMUIsWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUhuQixpQkFBWSxHQUFXLFdBQVcsQ0FBQztJQUdiLENBQUM7Ozs7SUFFeEMsVUFBVTtRQUNSLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuRTtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsWUFBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBa0I7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBL0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLE9BQU87Ozs7Ozs7O0lBVWQsdUNBQW9EOzs7OztJQUNwRCxtQ0FBMkI7Ozs7O0lBRWYsa0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5ncyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBTRVRUSU5HU19LRVk6IHN0cmluZyA9ICdfU2V0dGluZ3MnO1xuICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5ncztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UpIHt9XG5cbiAgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSAoYXdhaXQgdGhpcy5zdG9yYWdlLmdldCh0aGlzLlNFVFRJTkdTX0tFWSkpIHx8IHt9O1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfVxuXG4gIGdldEFsbCgpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3M7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzKGtleSkgPyB0aGlzLnNldHRpbmdzW2tleV0gOiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBzZXRBbGwoc2V0dGluZ3M6IFNldHRpbmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXQodGhpcy5TRVRUSU5HU19LRVksIHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aGlzLnNldHRpbmdzW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5zZXRBbGwodGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICByZW1vdmVBbGwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnJlbW92ZSh0aGlzLlNFVFRJTkdTX0tFWSk7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGRlbGV0ZSB0aGlzLnNldHRpbmdzW2tleV07XG4gICAgcmV0dXJuIHRoaXMuc2V0QWxsKHRoaXMuc2V0dGluZ3MpO1xuICB9XG59XG4iXX0=