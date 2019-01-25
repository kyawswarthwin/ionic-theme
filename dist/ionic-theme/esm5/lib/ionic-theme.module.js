/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { SettingsService } from 'ionic-settings';
import { THEME_CONFIG, ThemeService } from './services/theme.service';
// @dynamic
var IonicThemeModule = /** @class */ (function () {
    function IonicThemeModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    IonicThemeModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return {
            ngModule: IonicThemeModule,
            providers: [
                {
                    provide: THEME_CONFIG,
                    useValue: config
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: function (settings, theme) {
                        return function () {
                            return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, settings.initialize()];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, theme.initialize()];
                                        case 2:
                                            _a.sent();
                                            resolve();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        };
                    },
                    deps: [SettingsService, ThemeService],
                    multi: true
                }
            ]
        };
    };
    IonicThemeModule.decorators = [
        { type: NgModule }
    ];
    return IonicThemeModule;
}());
export { IonicThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtdGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvaW9uaWMtdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQWUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUduRjtJQUFBO0lBMkJBLENBQUM7Ozs7O0lBekJRLHdCQUFPOzs7O0lBQWQsVUFBZSxNQUFtQjtRQUFsQyxpQkF3QkM7UUF2QkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsTUFBTTtpQkFDakI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxVQUFDLFFBQXlCLEVBQUUsS0FBbUI7d0JBQ3pELE9BQU87NEJBQ0wsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Z0RBQ3ZDLHFCQUFNLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBQTs7NENBQTNCLFNBQTJCLENBQUM7NENBQzVCLHFCQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBQTs7NENBQXhCLFNBQXdCLENBQUM7NENBQ3pCLE9BQU8sRUFBRSxDQUFDOzs7O2lDQUNYLENBQUMsQ0FBQzt3QkFDTCxDQUFDLENBQUM7b0JBQ0osQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUNyQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTFCRixRQUFROztJQTJCVCx1QkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ2lvbmljLXNldHRpbmdzJztcblxuaW1wb3J0IHsgVGhlbWVDb25maWcsIFRIRU1FX0NPTkZJRywgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSW9uaWNUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogVGhlbWVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElvbmljVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFRIRU1FX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogKHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsIHRoZW1lOiBUaGVtZVNlcnZpY2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoZW1lLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcHM6IFtTZXR0aW5nc1NlcnZpY2UsIFRoZW1lU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==