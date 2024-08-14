import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <iframe
          src="https://en.wikipedia.org/wiki/Main_Page"
          style={styles.webContainer}
          title="WebView"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://en.wikipedia.org/wiki/Main_Page' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webContainer: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
});
