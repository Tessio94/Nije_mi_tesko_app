import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Popis = () => {
	return (
		<View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>200 m</Text>
				<Text>Grad Biograd na Moru</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>350 m</Text>
				<Text>Općina Lišane Ostrovičke</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>1 km</Text>
				<Text>Općina Pakoštane</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>2,5 km</Text>
				<Text>Općina Polača</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>800 m</Text>
				<Text>Općina Stankovci</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
		</View>
	);
};

export default Popis;
