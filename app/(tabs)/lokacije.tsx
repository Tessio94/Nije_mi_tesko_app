import Karta from "@/components/Karta";
import Popis from "@/components/Popis";
import { useInfoTab } from "@/context/InfoTabContext";
import React from "react";
import { View } from "react-native";

const Info = () => {
	const { location } = useInfoTab();

	return (
		<View>
			{location === "karta" && <Karta />}
			{location === "popis" && <Popis />}
		</View>
	);
};

export default Info;
