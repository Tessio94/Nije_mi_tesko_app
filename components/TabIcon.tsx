import { icons } from "@/constants/icons";
import { cn } from "@/utils/cn";
import React from "react";
import { Image, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }) => {
	return (
		<View
			className={cn(
				"flex flex-col w-full min-h-20 min-w-20 mt-8 flex-1 justify-center items-center gap-1 overflow-hidden",
				focused ? "bg-white/30 rounded-full" : ""
			)}
		>
			<Image
				source={icon}
				className={cn(icon === icons.lokacije ? "w-[14px] h-[20px]" : "size-5")}
			/>
			<Text className="text-text1 font-semibold text-xs">{title}</Text>
		</View>
	);
};

export default TabIcon;
