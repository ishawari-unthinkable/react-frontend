import React from 'react';
import {SafeAreaView, LogBox} from 'react-native';

import App from './App';
import GlobalProvider from './globalContext';

function AppRenderer() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </SafeAreaView>
  );
}

export default AppRenderer;

LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end
