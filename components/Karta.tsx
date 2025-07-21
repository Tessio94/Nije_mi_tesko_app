import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

const GOOGLE_MAP_IFRAME = `
  <iframe 
  src="https://www.nijemitesko.hr/karta" 
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
