import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from 'ionic-settings';
import { StatusBar } from '@ionic-native/status-bar/ngx';
export interface ThemeConfig {
    themes: Theme[];
    defaultTheme: string;
}
export interface Theme {
    name: string;
    colors?: IonicColors;
    properties?: Properties;
}
export interface IonicColors {
    primary?: string;
    secondary?: string;
    tertiary?: string;
    success?: string;
    warning?: string;
    danger?: string;
    light?: string;
    medium?: string;
    dark?: string;
    foreground?: string;
    background?: string;
}
export interface Properties {
    [propertyName: string]: string;
}
export declare const THEME_CONFIG: InjectionToken<ThemeConfig>;
export declare class ThemeService {
    private config;
    private document;
    private settings;
    private statusBar;
    private theme;
    constructor(config: ThemeConfig, document: Document, settings: SettingsService, statusBar: StatusBar);
    initialize(): Promise<void>;
    getThemes(): Theme[];
    getTheme(name: string): Theme;
    isActiveTheme(name: string): boolean;
    getActiveTheme(): Observable<Theme>;
    setActiveTheme(name: string): void;
    private setTheme;
    private generateTheme;
    private colorToRGB;
    private contrast;
    private shade;
    private tint;
}
