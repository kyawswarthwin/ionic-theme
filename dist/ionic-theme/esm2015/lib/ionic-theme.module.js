/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { SettingsService } from 'ionic-settings';
import { THEME_CONFIG, ThemeService } from './services/theme.service';
// @dynamic
export class IonicThemeModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: IonicThemeModule,
            providers: [
                {
                    provide: THEME_CONFIG,
                    useValue: config
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: (settings, theme) => {
                        return () => {
                            return new Promise((resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                                yield settings.initialize();
                                yield theme.initialize();
                                resolve();
                            }));
                        };
                    },
                    deps: [SettingsService, ThemeService],
                    multi: true
                }
            ]
        };
    }
}
IonicThemeModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtdGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvaW9uaWMtdGhlbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQWUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUluRixNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQW1CO1FBQ2hDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsQ0FBQyxRQUF5QixFQUFFLEtBQW1CLEVBQUUsRUFBRTt3QkFDN0QsT0FBTyxHQUFHLEVBQUU7NEJBQ1YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQ0FDM0MsTUFBTSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7Z0NBQzVCLE1BQU0sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dDQUN6QixPQUFPLEVBQUUsQ0FBQzs0QkFDWixDQUFDLENBQUEsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQztvQkFDSixDQUFDO29CQUNELElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7b0JBQ3JDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBMUJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdpb25pYy1zZXR0aW5ncyc7XG5cbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBUSEVNRV9DT05GSUcsIFRoZW1lU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGhlbWUuc2VydmljZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIElvbmljVGhlbWVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFRoZW1lQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJb25pY1RoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBUSEVNRV9DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IChzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLCB0aGVtZTogVGhlbWVTZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IHNldHRpbmdzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGVtZS5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXBzOiBbU2V0dGluZ3NTZXJ2aWNlLCBUaGVtZVNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=