import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SHForm from "@/components/form/SHForm";
import SHInput from "@/components/form/SHInput";
import { BASE_URL } from "@/constants/api";
import { Link } from "expo-router";
import { FieldValues, SubmitHandler } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
			credentials: "include"
		});
		const result = await response.json();

		
		await AsyncStorage.setItem("auth-token", result?.token);
	};

	const defaultValues = {
		email: "",
		password: "",
	};

	return (
		<ThemedView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<ThemedView style={{ width: 300, padding: 4 }}>
				<SHForm onSubmit={onSubmit} defaultValues={defaultValues}>
					<SHInput name="email" label="Email" />
					<SHInput name="password" label="Password" />
					<ThemedView>
						<ThemedText>
							Don't have account?{" "}
							<Link style={{ color: "blue" }} href="/register">
								Register
							</Link>
						</ThemedText>
					</ThemedView>
				</SHForm>
			</ThemedView>
		</ThemedView>
	);
};

export default Login;
