import { Storage } from '@ionic/storage';
export interface Settings {
    [key: string]: any;
}
export declare class SettingsService {
    private storage;
    private readonly SETTINGS_KEY;
    private settings;
    constructor(storage: Storage);
    initialize(): Promise<void>;
    has(key: string): boolean;
    getAll(): Settings;
    get(key: string, defaultValue?: any): any;
    setAll(settings: Settings): Promise<any>;
    set(key: string, value: any): Promise<any>;
    removeAll(): Promise<any>;
    remove(key: string): Promise<any>;
}
