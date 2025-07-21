import { images } from "@/constants/images";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import ImageViewing from "react-native-image-viewing";

const Raspored = () => {
	const [visible, setVisible] = useState(false);

	return (
		<ScrollView
			className="w-full px-3  pb-20"
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ minHeight: "100%" }}
		>
			<View className="px-3 py-12 flex flex-col gap-5 w-full">
				<View className="relative mb-10">
					<Text className="font-semibold text-md text-gray-500 text-4xl italic ">
						Raspored odvoza otpada
					</Text>
					<View className="absolute h-[3px] w-[15px] left-[50%] top-[100%] translate-x-[-50%] bg-theme1"></View>
				</View>
				<View className="w-full">
					<Text className="font-semibold text-md text-gray-500 text-3xl italic mb-2">
						Grad Biograd na Moru
					</Text>
					<Text className="font-semibold text-md mb-2">
						Zimski kalendar, 2020./2021.:
					</Text>
					<TouchableOpacity onPress={() => setVisible(true)}>
						<Image
							source={images.rasporedBio}
							resizeMode="contain"
							className="w-full h-[240px] max-w-full"
						/>
					</TouchableOpacity>

					<ImageViewing
						images={[{ uri: Image.resolveAssetSource(images.rasporedBio).uri }]}
						imageIndex={0}
						visible={visible}
						onRequestClose={() => setVisible(false)}
					/>
				</View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Komunalni otpad
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Ponedjeljkom </Text>
							- Poluotok, Jaz, Vruljine, Kožina, Bošana, Zagrebačka ulica i
							Ulica Dr. Franje Tuđmana
						</Text>
					</View>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Srijedom </Text>-
							Jankolovica, Kosa Istok, Kosa Zapad, Meterize, Granda i Dubrovačka
							ulica
						</Text>
					</View>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Petkom </Text>-
							Rust, Tuče, Centar i Kumenat
						</Text>
					</View>
				</View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Plastična ambalaža:
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Utorkom </Text>-
							prema kalendaru
						</Text>
					</View>
				</View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Biootpad:
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text className="font-semibold text-gray-700">Srijedom </Text>
					</View>
				</View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Papir, karton i tetrapak ambalaža:
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Četvrtkom </Text>-
							prema kalendaru
						</Text>
					</View>
				</View>
				<Text>Za vrijeme državnih praznika usluge se vrše naredni dan.</Text>
				<View className="h-[1px] bg-gray-300 my-3"></View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-gray-500 text-3xl italic mb-2">
						Stankovci
					</Text>
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Komunalni otpad:
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text className="font-semibold text-gray-700">Četvrtkom </Text>
					</View>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">
								Utorkom i petkom{" "}
							</Text>
							(Srpanj i kolovoz)
						</Text>
					</View>
				</View>
				<View className="h-[1px] bg-gray-300 my-3"></View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-gray-500 text-3xl italic mb-2">
						Polača
					</Text>
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Komunalni otpad:
					</Text>
					<Text className="mb-2">(01.11. – 30.04.)</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Srijedom </Text>-
							Polača, Jagodnja Gornja i Jagodnja Donja
						</Text>
					</View>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Četvrtkom </Text>–
							Kakma
						</Text>
					</View>
					<Text className="mb-2">(01.11. – 30.04.)</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">
								Ponedjeljkom i petkom{" "}
							</Text>
							- Polača, Jagodnja Gornja, Jagodnja Donja, Kakma
						</Text>
					</View>
				</View>
				<View className="h-[1px] bg-gray-300 my-3"></View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-gray-500 text-3xl italic mb-2">
						Lišane Ostrovičke
					</Text>
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Komunalni otpad:
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">Četvrtkom </Text>-
							Lišane Ostrovičke, Ostrovica i Dobropoljci
						</Text>
					</View>
				</View>
				<View className="h-[1px] bg-gray-300 my-3"></View>
				<View className="w-full pr-10">
					<Text className="font-semibold text-md text-gray-500 text-3xl italic mb-2">
						Pakoštane
					</Text>
					<Text className="font-semibold text-md text-theme1 uppercase mb-2">
						Komunalni otpad:
					</Text>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text className="font-semibold text-gray-700">
							Srijedom i petkom{" "}
						</Text>
					</View>
					<View className="flex flex-row gap-5 mb-2">
						<Text className="ml-5">•</Text>
						<Text>
							<Text className="font-semibold text-gray-700">
								Ponedjeljkom, srijedom i petkom{" "}
							</Text>
							(ljeto)
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Raspored;
