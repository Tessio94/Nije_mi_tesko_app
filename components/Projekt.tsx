import { icons } from "@/constants/icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Projekt = () => {
	return (
		<ScrollView
			className="w-full px-3  pb-20"
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ minHeight: "100%" }}
		>
			<View className="flex flex-row w-full justify-between gap-14 pt-8">
				<Image
					source={icons.headerLogo}
					className="flex-1 w-full h-[80px]"
					resizeMode="stretch"
				/>
				<Image
					source={icons.eu}
					className="flex-1 w-full h-[80px]"
					resizeMode="contain"
				/>
			</View>

			<View className="px-3 py-12 flex flex-col gap-5">
				<Text className="font-semibold  text-gray-700 text-lg">
					Projekt „Nije mi teško - zajedno za čisti okoliš i očuvanu prirodu“
				</Text>
				<Text>
					Provedba programa izobrazno-informativnih aktivnosti o održivom
					gospodarenju otpadom.
				</Text>
				<Text>
					Financirano iz Kohezijskog fonda u financijskom razdoblju 2014.-2020.
				</Text>
				<Text>
					Referentni broj Ugovora o dodjeli bespovratnih sredstava:
					KK.06.3.1.07.0087
				</Text>
				<Text>
					<Text className="font-semibold text-md text-gray-700">
						Svrha provedbe izobrazno – informativnih aktivnosti
					</Text>{" "}
					je informiranje i edukacija građana s područja obuhvata projekta o
					konceptu kružnog gospodarstva, izgradnja svijesti o važnosti promjene
					navika u pogledu gospodarenja otpadom i učinkovitom upravljanju
					resursima te jačanju prepoznatljivosti uloge JLS u izgradnji
					učinkovitog i cjelovitog sustava gospodarenja otpadom kao i jačanju
					međusobne komunikacije između sudionika u projektu.
				</Text>
				<Text className="pb-10">
					<Text className="font-semibold text-md text-gray-700">
						Cilj provedbe izobrazno – informativnih aktivnosti
					</Text>{" "}
					o održivom gospodarenju otpadom je informirati i educirati građane o
					konceptu kružnog gospodarstva i ulozi gospodarenja otpadom te
					izgraditi svijest građana o važnosti promjene svojih navika za potrebe
					odgovornog postupanja s otpadom i učinkovitog upravljanja resursima.
				</Text>
			</View>
		</ScrollView>
	);
};

export default Projekt;
