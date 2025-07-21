import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import {
	Image,
	Linking,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const Novosti = () => {
	return (
		<ScrollView className="py-10 px-3">
			<View className="flex flex-col w-full mb-5">
				<TouchableOpacity
					onPress={() => {
						Linking.openURL(
							"https://www.nijemitesko.hr/novost/zavrsen-projekt-nije-mi-tesko-zajedno-za-cisti-okolis-i-ocuvanu-prirodu"
						);
					}}
				>
					<Image
						source={images.novosti1}
						className="w-full h-[232px]"
						resizeMode="contain"
					/>
					<View className="flex flex-col gap-3 border-[1px] border-gray-500 p-3 border-t-0">
						<Text className="text-lg font-semibold">
							Završen projekt „Nije mi teško – zajedno za čisti okoliš i očuvanu
							prirodu“
						</Text>
						<Text>
							Nositelj projekta bio je Grad Biograd na Moru, dok su sunositelji
							aktivnosti bili Općina Lišane Ostrovičke, Općina Pakoštane, Općina
							Polača i Općina Stankovci.
						</Text>
						<View className="flex flex-row items-center gap-3">
							<Image source={icons.time} className="h-[20px] w-[19px]" />
							<Text>23.12.2020.</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View className="flex flex-col w-full mb-5">
				<TouchableOpacity
					onPress={() => {
						Linking.openURL(
							"https://www.nijemitesko.hr/novost/odrzana-natjecanje-u-skolama-u-izradi-kreativnih-stvari-od-prethodno-prikupljenog-otpada"
						);
					}}
				>
					<Image
						source={images.novosti2}
						className="w-full h-[232px]"
						resizeMode="contain"
					/>
					<View className="flex flex-col gap-3 border-[1px] border-gray-500 p-3">
						<Text className="text-lg font-semibold">
							U školama i vrtićima održana natjecanja u izradi kreativnih stvari
							od prethodno prikupljenog otpada.
						</Text>
						<Text>
							U izradi kreativnih predmeta korišten je plastični i stakleni
							otpad the stari CD-ovi
						</Text>
						<View className="flex flex-row items-center gap-3">
							<Image source={icons.time} className="h-[20px] w-[19px]" />
							<Text>20.11.2020.</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<View className="flex flex-col w-full pb-24">
				<TouchableOpacity
					onPress={() => {
						Linking.openURL(
							"https://www.nijemitesko.hr/novost/odrzana-akcija-ciscenja-uvale-soline-u-biogradu-na-moru"
						);
					}}
				>
					<Image
						source={images.novosti3}
						className="w-full h-[232px]"
						resizeMode="contain"
					/>
					<View className="flex flex-col gap-3 border-[1px] border-gray-500 p-3">
						<Text className="text-lg font-semibold">
							Održana akcija čišćenja uvale Soline u Biograd na Moru.
						</Text>
						<Text>
							Akcijom čišćenja i radionicama za djecu u Biogradu na Moru
							obilježen Svjetski dan hrane
						</Text>
						<View className="flex flex-row items-center gap-3">
							<Image source={icons.time} className="h-[20px] w-[19px]" />
							<Text>20.10.2020.</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Novosti;
