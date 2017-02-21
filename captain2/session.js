import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    defaultExpires: null,
    // cache data in the memory. default is true.
    enableCache: true,
    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return 
    // the latest data.
    sync : {
        // we'll talk about the details later.
    }
});

module.exports = storage;
