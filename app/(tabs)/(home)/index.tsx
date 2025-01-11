import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { BASE_URL } from "@/constants/api";
import Products from "@/components/home/Products";
import {IProduct} from "@/@types";

export default function HomeScreen() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getProducts = async () => {
		try {
			const response = await fetch(
				`${BASE_URL}/products`
			);
			const result = await response.json();
			setProducts(result.data);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getProducts()
	}, []);

	return (
		<ScrollView style={styles.container}>
			<ThemedText type="title" style={[styles.title, styles.children]}>
				Products
			</ThemedText>
			<Products products={ products }/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	children: {
		paddingBottom: 24,
	},
	title: {
		margin: "auto",
	},
});
