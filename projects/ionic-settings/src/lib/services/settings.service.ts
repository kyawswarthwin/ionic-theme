import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Settings {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly SETTINGS_KEY: string = '_Settings';
  private settings: Settings;

  constructor(private storage: Storage) {}

  initialize(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      if (!this.settings) {
        this.settings = (await this.storage.get(this.SETTINGS_KEY)) || {};
      }
      resolve();
    });
  }

  has(key: string): boolean {
    return this.settings.hasOwnProperty(key);
  }

  getAll(): Settings {
    return this.settings;
  }

  get(key: string, defaultValue?: any): any {
    return this.has(key) ? this.settings[key] : defaultValue;
  }

  setAll(settings: Settings): Promise<any> {
    this.settings = settings;
    return this.storage.set(this.SETTINGS_KEY, this.settings);
  }

  set(key: string, value: any): Promise<any> {
    this.settings[key] = value;
    return this.setAll(this.settings);
  }

  removeAll(): Promise<any> {
    return this.storage.remove(this.SETTINGS_KEY);
  }

  remove(key: string): Promise<any> {
    delete this.settings[key];
    return this.setAll(this.settings);
  }
}
