import { icons } from "@/constants/icons";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 px-3 pt-8 pb-2 bg-white">
			<ScrollView
				className="flex-1 "
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ minHeight: "100%" }}
			>
				<View className="w-full px-5">
					<Image
						source={icons.headerLogo}
						className="h-64 w-full max-w-full"
						resizeMode="contain"
					/>
				</View>
				<View className="flex flex-row gap-3 w-full flex-nowrap mt-4">
					<View className="flex-1 flex flex-col gap-3 items-center justify-start">
						<Image
							source={icons.biograd}
							className="w-full h-24"
							resizeMode="contain"
						/>
						<Text className="uppercase text-center font-bold text-[10px]">
							Grad{"\n"} Biograd{"\n"} na moru
						</Text>
					</View>
					<View className="flex-1 flex flex-col gap-3 items-center justify-start">
						<Image
							source={icons.lisane}
							className="w-full mt-[2px] h-24"
							resizeMode="contain"
						/>
						<Text className="uppercase text-center font-bold text-[10px]">
							Općina{"\n"} Lišane{"\n"} Ostrovičke
						</Text>
					</View>
					<View className="flex-1 flex flex-col gap-3 items-center justify-start">
						<Image
							source={icons.polaca}
							className="w-full mt-[-2px]  h-24"
							resizeMode="contain"
						/>
						<Text className="uppercase text-center font-bold text-[10px]">
							Općina{"\n"} Polača
						</Text>
					</View>
					<View className="flex-1 flex flex-col gap-3 items-center justify-start">
						<Image
							source={icons.stankovci}
							className="w-full  h-24"
							resizeMode="contain"
						/>
						<Text className="uppercase text-center font-bold text-[10px]">
							Općina{"\n"} Stankovci
						</Text>
					</View>
					<View className="flex-1 flex flex-col gap-3 items-center justify-start">
						<Image
							source={icons.pakostane}
							className="w-full mt-[-5px] h-24"
							resizeMode="contain"
						/>
						<Text className="uppercase text-center font-bold text-[10px]">
							Općina{"\n"}
							Pakoštane
						</Text>
					</View>
				</View>

				<Image source={icons.eu} className="mx-auto mt-24 w-[120px] h-[98px]" />
				<View className="flex flex-row w-full mt-6 px-4 gap-6">
					<Image
						source={icons.fondovi}
						className="flex-1 w-full h-[50px]"
						resizeMode="contain"
					/>
					<Image
						source={icons.program}
						className="flex-1 w-full h-[50px]"
						resizeMode="contain"
					/>
				</View>
				<View className="mt-5 px-4">
					<Text className="text-['#1f519f'] text-[10px] font-semibold uppercase">
						Projekt je sufinancirala europska unija iz kohezijskog fonda
					</Text>
					<Text className="text-black text-[10px] mt-2 text-center">
						Sadržaj aplikacije isključiva je odgovornost Grada Biograda na Moru.
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}
