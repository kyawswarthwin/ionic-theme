export interface Theme {
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
    dark?: string;
    medium?: string;
    light?: string;
    foreground?: string;
    background?: string;
}
export interface Properties {
    [propertyName: string]: string;
}
export declare class IonicThemeService {
    private document;
    constructor(document: Document);
    getPropertyValue(propertyName: string): string;
    setProperty(propertyName: string, value: string | null, priority?: string | null): void;
    removeProperty(propertyName: string): string;
    setTheme(theme: Theme): void;
    private generateTheme;
    private colorToRGB;
    private contrast;
    private shade;
    private tint;
}
