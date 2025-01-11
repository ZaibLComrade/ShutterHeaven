import React, { ReactNode } from "react";
import {
	DefaultValues,
	FieldValues,
	Resolver,
	SubmitHandler,
	useForm,
	FormProvider,
} from "react-hook-form";
import { Button, StyleSheet } from "react-native";
import {ThemedView} from "../ThemedView";

interface IProps {
	resolver?: Resolver<any>;
	defaultValues?: DefaultValues<any>;
	children: ReactNode;
	onSubmit: SubmitHandler<FieldValues>;
}

const SHForm = ({ resolver, defaultValues, children, onSubmit }: IProps) => {
	const formConfig: {
		resolver?: Resolver<any>;
		defaultValues?: DefaultValues<any>;
	} = {};

	if (resolver) formConfig["resolver"] = resolver;
	if (defaultValues) formConfig["defaultValues"] = defaultValues;

	const form = useForm(formConfig);

	return (
		<FormProvider {...form}>
			<ThemedView>
				<ThemedView style={styles.form}>{children}</ThemedView>
				<Button title="Submit" onPress={form.handleSubmit(onSubmit)} />
			</ThemedView>
		</FormProvider>
	);
};

const styles = StyleSheet.create({
	form: {
		marginBottom: 20,
	},
});

export default SHForm;
