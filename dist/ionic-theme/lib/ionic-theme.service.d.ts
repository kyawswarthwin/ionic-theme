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
    backgroundColor?: string;
    textColor?: string;
}
export interface CustomProperties {
    [propertyName: string]: string;
}
export declare class IonicThemeService {
    private document;
    constructor(document: Document);
    getPropertyValue(propertyName: string): string;
    setProperty(propertyName: string, value: string | null, priority?: string | null): void;
    removeProperty(propertyName: string): string;
    setTheme(colors?: IonicColors, properties?: CustomProperties): void;
    private generateColor;
    private colorToRGB;
    private contrast;
    private shade;
    private tint;
    private generateColorSteps;
    private setGlobalCSS;
    private generateCustomProperties;
}
