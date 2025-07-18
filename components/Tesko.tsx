import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Tesko = () => {
	return (
		<View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>Sprječavanje nastanka otpada</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>Odgovorno postupanje s otpadom</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>Odvojeno sakupljanje otpada</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
			<View className="py-3 px-4 flex flex-row justify-between">
				<Text>Ponovna upotreba predmeta i kompostiranje</Text>
				<Image source={icons.rightArr} className="w-[14px] h-[22px]" />
			</View>
		</View>
	);
};

export default Tesko;
