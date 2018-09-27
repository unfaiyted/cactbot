'use strict';
// Defines storage functions for saving settings

class SettingStorage {
  constructor(storageName) {
    this.storageName = storageName;
  }

  update(settings) {
    return localStorage.setItem(this.storageName, JSON.stringify(settings));
  }

  get() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }
}

