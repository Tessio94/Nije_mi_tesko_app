import Projekt from "@/components/Projekt";
import Tesko from "@/components/Tesko";
import { useInfoTab } from "@/context/InfoTabContext";
import React from "react";
import { View } from "react-native";

const Info = () => {
	const { content } = useInfoTab();

	return (
		<View>
			{content === "tesko" && <Tesko />}
			{content === "projekt" && <Projekt />}
		</View>
	);
};

export default Info;
