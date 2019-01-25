(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/storage')) :
    typeof define === 'function' && define.amd ? define('ionic-settings', ['exports', '@angular/core', '@ionic/storage'], factory) :
    (factory((global['ionic-settings'] = {}),global.ng.core,global.i1));
}(this, (function (exports,i0,i1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

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
                return new Promise(function (resolve, reject) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!!this.settings)
                                        return [3 /*break*/, 2];
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
                    });
                });
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SettingsService.ctorParameters = function () {
            return [
                { type: i1.Storage }
            ];
        };
        /** @nocollapse */ SettingsService.ngInjectableDef = i0.defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(i0.inject(i1.Storage)); }, token: SettingsService, providedIn: "root" });
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

    exports.SettingsService = SettingsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionic-settings.umd.js.map