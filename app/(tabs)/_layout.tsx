import Header from "@/components/Header";
import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants/icons";
import { InfoTabProvider } from "@/context/InfoTabContext";
import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
	return (
		<InfoTabProvider>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarItemStyle: {
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					},

					tabBarStyle: {
						backgroundColor: "#558b39",
						height: 70,
						marginBottom: 45,
						overflow: "hidden",
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						headerShown: false,
						tabBarItemStyle: { display: "none" },
					}}
				/>
				<Tabs.Screen
					name="info"
					options={{
						title: "Info",
						header: () => <Header title="Info" type="info" />,
						tabBarIcon: ({ focused }) => (
							<TabIcon focused={focused} title="Info" icon={icons.home} />
						),
					}}
				/>
				<Tabs.Screen
					name="lokacije"
					options={{
						title: "Lokacije",
						header: () => <Header title="Lokacije" type="lokacija" />,
						tabBarIcon: ({ focused }) => (
							<TabIcon
								focused={focused}
								title="Lokacije"
								icon={icons.lokacije}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="raspored"
					options={{
						title: "Raspored",
						header: () => <Header title="Raspored" type="raspored" />,
						tabBarIcon: ({ focused }) => (
							<TabIcon
								focused={focused}
								title="Raspored"
								icon={icons.raspored}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="novosti"
					options={{
						title: "Novosti",
						header: () => <Header title="Novosti" type="novosti" />,
						tabBarIcon: ({ focused }) => (
							<TabIcon focused={focused} title="Novosti" icon={icons.novosti} />
						),
					}}
				/>
			</Tabs>
		</InfoTabProvider>
	);
};

export default _Layout;
