import React from "react";
import { View } from "react-native";

const Karta = () => {
	return (
		<View className="flex-1 w-full">
			{/* <MapView
				className="h-20 w-full"
				initialRegion={{
					latitude: 43.955787,
					longitude: 15.387774,
					latitudeDelta: 0.1,
					longitudeDelta: 0.1,
				}}
			>
				<Marker
					coordinate={{ latitude: 43.955787, longitude: 15.387774 }}
					title="Biograd na Moru"
				/>
			</MapView> */}
		</View>
	);
};

// const styles = {
// 	container: {
// 		flex: 1,
// 	},
// 	map: {
// 		width: "100%",
// 		height: "100%",
// 	},
// };

export default Karta;
