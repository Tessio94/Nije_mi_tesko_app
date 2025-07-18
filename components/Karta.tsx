import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const GOOGLE_MAP_IFRAME = `
  <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45954.70219659859!2d15.428975084803486!3d43.9558714366697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334cad63ad93431%3A0x7a890b4acf46390a!2sBiograd%20na%20Moru!5e0!3m2!1shr!2shr!4v1752867552716!5m2!1shr!2shr" 
  width="100%" 
  height="100%" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
  </iframe>
`;

const Karta = () => {
  return (
    <View className="w-full h-full">
      <WebView
        originWhitelist={["*"]}
        source={{ html: GOOGLE_MAP_IFRAME }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        className="h-full"
      />
    </View>
  );
};

export default Karta;
