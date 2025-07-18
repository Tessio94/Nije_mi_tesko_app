import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Novosti = () => {
	return (
		<ScrollView className="py-10 px-3">
			<View className="flex flex-col w-full mb-5">
				<Image
					source={images.photo}
					className="w-full h-[232px]"
					resizeMode="contain"
				/>
				<View className="flex flex-col gap-3 border-[1px] border-gray-500 p-3 border-t-0">
					<Text className="text-lg font-semibold">
						Nije mi teško - zajedno za čisti okoliš i očuvanu prirodu
					</Text>
					<Text>
						Cilj projekta je informiranje javnosti o održivom gospodarenju
						otpadom i educiranje građana o konceptu kružnog gospodarstva u svrhu
						podizanja svijesti građana o važnosti odgovornog postupanja s
						otpadom i ojačavanja prepoznatljivosti JLS-ova u izgradnji
						učinkovitog i cjelovitog sustava gospodarenja otpadom, kazao je Ivan
						Čupić, voditelj LAG Laura.
					</Text>
					<View className="flex flex-row items-center gap-3">
						<Image source={icons.time} className="h-[20px] w-[19px]" />
						<Text>7.11.2019.</Text>
					</View>
				</View>
			</View>
			<View className="flex flex-col gap-3 border-[1px] border-gray-500 p-3">
				<Text className="text-lg font-semibold">
					Konferencija projekta "Nije mi teško-zajedno za čisti okoliš i očuvanu
					prirodu"
				</Text>
				<View className="flex flex-row items-center gap-3">
					<Image source={icons.time} className="h-[20px] w-[19px]" />
					<Text>6.11.2019.</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Novosti;
