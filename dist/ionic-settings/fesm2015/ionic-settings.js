import { __awaiter } from 'tslib';
import { Injectable, defineInjectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingsService {
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
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ SettingsService.ngInjectableDef = defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(inject(Storage)); }, token: SettingsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SettingsService };

//# sourceMappingURL=ionic-settings.js.map