import { useInfoTab } from "@/context/InfoTabContext";
import { cn } from "@/utils/cn";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Header = ({ title, type }: { title: string; type: string }) => {
	const { content, setContent, location, setLocation } = useInfoTab();

	return (
		<>
			<View className="bg-theme1 mt-10 flex-row py-5 px-5 justify-between">
				<View className="flex flex-row gap-8 items-end">
					{/* <Image source={icons.leftArr} className="w-[15px] h-[24px]" /> */}
					<Text className="text-white text-3xl  leading-none">{title}</Text>
				</View>
				{/* <View className="flex flex-row gap-8 items-end">
					<Image source={icons.search} className="h-[24px] w-[24px]" />
					<Image source={icons.threeDots} className="h-[24px] w-[6px]" />
				</View> */}
			</View>
			{type === "info" && (
				<View className="bg-theme1 flex flex-row justify-between">
					{/* <Pressable
						className={cn(
							"w-[50%] py-4",
							content === "tesko" && "border-b-2 border-b-white"
						)}
						onPress={() => setContent("tesko")}
					>
						<Text className="uppercase text-white font-semibold text-center">
							Nije mi teško
						</Text>
					</Pressable> */}
					<Pressable
						className={cn(
							"w-[50%] py-4",
							content === "projekt" && "border-b-2 border-b-white"
						)}
						onPress={() => setContent("projekt")}
					>
						<Text className="uppercase text-white font-semibold text-center">
							O projektu
						</Text>
					</Pressable>
				</View>
			)}
			{type === "lokacija" && (
				<View className="bg-theme1 flex flex-row justify-between">
					<Pressable
						className={cn(
							"w-[50%] py-4",
							location === "karta" && "border-b-2 border-b-white"
						)}
						onPress={() => setLocation("karta")}
					>
						<Text className="uppercase text-white font-semibold text-center">
							Karta
						</Text>
					</Pressable>
					{/* <Pressable
						className={cn(
							"w-[50%] py-4",
							location === "popis" && "border-b-2 border-b-white"
						)}
						onPress={() => setLocation("popis")}
					>
						<Text className="uppercase text-white font-semibold text-center">
							Popis
						</Text>
					</Pressable> */}
				</View>
			)}
		</>
	);
};

export default Header;
