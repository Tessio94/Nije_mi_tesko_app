import { icons } from "@/constants/icons";
import React from "react";
import {
	Image,
	Linking,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const Projekt = () => {
	const handleEmailPress = () => {
		Linking.openURL("mailto:hrvoje.raspovic@biogradnamoru.hr");
	};

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
				<Text>
					<Text className="font-semibold text-md text-gray-700">
						Cilj provedbe izobrazno – informativnih aktivnosti
					</Text>{" "}
					o održivom gospodarenju otpadom je informirati i educirati građane o
					konceptu kružnog gospodarstva i ulozi gospodarenja otpadom te
					izgraditi svijest građana o važnosti promjene svojih navika za potrebe
					odgovornog postupanja s otpadom i učinkovitog upravljanja resursima.
				</Text>
				<Text>
					Time će se ojačati prepoznatljivost i znanje građana o ulozi JLS u
					izgradnji učinkovitog i cjelovitog sustava gospodarenja otpadom kao i
					njihova međusobna komunikacija.
				</Text>
				<Text>
					Mjere koje će pomoći u ostvarenju definiranog cilja odnose se na
					provedbu izobrazno – informativnih aktivnosti, koje proizlaze iz
					Programa izobrazno – informativnih aktivnosti o održivom gospodarenju
					otpadom Ministarstva zaštite okoliša i energetike.
				</Text>
				<Text>
					<Text className="font-semibold text-md text-gray-700">
						Ukupna vrijednost projekta
					</Text>{" "}
					je 511.042,35 kuna, dok su prihvatljivi troškovi 503.887,00 kuna.
				</Text>
				<Text className="border-b-[1px] border-gray-400 pb-5">
					Projektu su dodijeljena bespovratna sredstva u iznosu od 428.303,63
					kuna, što predstavlja 84,9999365% ukupno prihvatljivih troškova.
				</Text>
				<Text className="pb-5">
					Predviđeno trajanje projekta je 20 mjeseci, odnosno razdoblje provedbe
					projekta traje zaključno do 26.06.2020. godine.
				</Text>
				<View>
					<Text className="font-semibold text-md text-gray-700 mb-2">
						Kontakt osoba za više informacija:
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>Hrvoje Raspović</Text>
					</View>
					<View className="flex flex-row gap-5 mb-2 relative">
						<Text className="ml-5">•</Text>
						<TouchableOpacity onPress={handleEmailPress}>
							<Text>hrvoje.raspovic@biogradnamoru.hr</Text>
						</TouchableOpacity>
						<View className="bg-theme1 h-[1px] w-[218px] left-[40px] top-6 absolute"></View>
					</View>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							Trg Kralja Tomislava 5,{"\n"} 23210 Grad Biograd na Moru
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Projekt;
