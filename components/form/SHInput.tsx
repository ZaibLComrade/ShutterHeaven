import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Text, TextInput, StyleSheet } from "react-native";
import {ThemedView} from "../ThemedView";

interface IProps {
	name: string;
	label: string;
	placeholder?: string;
	className?: string; // Not used in React Native, retained for interface compatibility
	type?: "password" | "text";
	labelClass?: string; // Not used in React Native, retained for interface compatibility
}

const SHInput = ({ name, label, placeholder = "", type = "text" }: IProps) => {
	const { control } = useFormContext();

	return (
		<ThemedView style={styles.formItem}>
			<Text style={styles.formLabel}>{label}</Text>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						placeholder={placeholder}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						secureTextEntry={type === "password"}
					/>
				)}
			/>
			{/* Placeholder for error message */}
			<Text style={styles.formMessage}>
				{" "}
				{/* Add error message logic here */}
			</Text>
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	formItem: {
		marginBottom: 16,
	},
	formLabel: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 8,
		color: "#eee",
	},
	input: {
		height: 40,
		borderColor: "#222",
		borderWidth: 1,
		borderRadius: 4,
		paddingHorizontal: 8,
		backgroundColor: "#111",
		color: "white",
		width: "100%",
	},
	formMessage: {
		marginTop: 4,
		color: "red",
		fontSize: 12,
	},
});

export default SHInput;
