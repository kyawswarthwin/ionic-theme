import { __awaiter, __generator } from 'tslib';
import { Injectable, defineInjectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SettingsService = /** @class */ (function () {
    function SettingsService(storage) {
        this.storage = storage;
        this.SETTINGS_KEY = '_Settings';
    }
    /**
     * @return {?}
     */
    SettingsService.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.settings) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.storage.get(this.SETTINGS_KEY)];
                    case 1:
                        _a.settings = (_b.sent()) || {};
                        _b.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SettingsService.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.settings.hasOwnProperty(key);
    };
    /**
     * @return {?}
     */
    SettingsService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.settings;
    };
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    SettingsService.prototype.get = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    function (key, defaultValue) {
        return this.has(key) ? this.settings[key] : defaultValue;
    };
    /**
     * @param {?} settings
     * @return {?}
     */
    SettingsService.prototype.setAll = /**
     * @param {?} settings
     * @return {?}
     */
    function (settings) {
        this.settings = settings;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SettingsService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.settings[key] = value;
        return this.setAll(this.settings);
    };
    /**
     * @return {?}
     */
    SettingsService.prototype.removeAll = /**
     * @return {?}
     */
    function () {
        return this.storage.remove(this.SETTINGS_KEY);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SettingsService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        delete this.settings[key];
        return this.setAll(this.settings);
    };
    SettingsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SettingsService.ctorParameters = function () { return [
        { type: Storage }
    ]; };
    /** @nocollapse */ SettingsService.ngInjectableDef = defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(inject(Storage)); }, token: SettingsService, providedIn: "root" });
    return SettingsService;
}());

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