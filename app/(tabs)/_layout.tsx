import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="(home)/index"
				options={{
					title: "Home",
				}}
			/>
			<Tabs.Screen
				name="(dashboard)/dashboard"
				options={{
					title: "Dashboard",
				}}
			/>
			<Tabs.Screen
				name="(home)/login"
				options={{
					title: "Login",
				}}
			/>
			<Tabs.Screen 
				name="(home)/products/[id]"
				options={{
					tabBarButton: () => null
				}}
			/>
		</Tabs>
	);
}
