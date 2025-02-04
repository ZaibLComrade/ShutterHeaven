import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SHForm from "@/components/form/SHForm";
import SHInput from "@/components/form/SHInput";
import { BASE_URL } from "@/constants/api";
import { Link } from "expo-router";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const response = await fetch(`${BASE_URL}/auth/register`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();
		console.log(result);
	};

	const defaultValues = {
		name: "",
		email: "",
		password: "",
		role: "BUYER",
	};

	return (
		<ThemedView
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<ThemedView style={{ width: 300, padding: 4 }}>
				<SHForm onSubmit={onSubmit} defaultValues={defaultValues}>
					<SHInput name="name" label="Name" />
					<SHInput name="email" label="Email" />
					<SHInput name="password" label="Password" />
					<ThemedView>
						<ThemedText>
							Already have account?{" "}
							<Link style={{ color: "blue" }} href="/login">
								Login
							</Link>
						</ThemedText>
					</ThemedView>
				</SHForm>
			</ThemedView>
		</ThemedView>
	);
};

export default Register;
