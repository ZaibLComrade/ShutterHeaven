import { IProduct } from "@/@types";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { BASE_URL } from "@/constants/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

const ProductDetails = () => {
	const { id } = useLocalSearchParams();
	const [product, setProduct] = useState<IProduct | null>(null);
	const [imageLoadError, setImageLoadError] = useState<boolean>(false);
	const getProduct = async () => {
		const response = await fetch(`${BASE_URL}/products/${id}`);
		const result = await response.json();
		setProduct(result.data);
	};

	useEffect(() => {
		getProduct();
	}, []);

	const details = [
		{ label: "Name", value: product?.name },
		{ label: "Brand", value: product?.brand },
		{ label: "Price", value: `${product?.price} ${product?.currency}` },
		{ label: "Category", value: product?.category },
		{ label: "Description", value: product?.description },
		{ label: "Rating", value: product?.rating },
	];
	const specs = [
		{ label: "Iso Range", value: product?.specs?.iso_range },
		{ label: "Megapixels", value: product?.specs?.megapixels },
		{ label: "Sensor Type", value: product?.specs?.sensor_type },
		{ label: "Video Resolution", value: product?.specs?.video_resolution },
		{ label: "Weight", value: product?.specs?.weight },
	];

	return (
		<ScrollView style={styles.detailsPage}>
			{/* Image */}
			<ThemedView style={styles.imageContainer}>
				{!imageLoadError ? (
					<Image
						style={{ height: "100%" }}
						source={{ uri: product?.images?.[0] }}
						onError={() => setImageLoadError(true)}
					/>
				) : (
					<ThemedText
						style={{
							color: "#ffffff30",
							fontWeight: "bold",
						}}
					>
						Image not found
					</ThemedText>
				)}
			</ThemedView>

			{/* Details */}
			<ThemedView style={styles.detailsContainer}>
				<ThemedView style={styles.detailsChild}>
					<ThemedView style={styles.title}>
						<ThemedText type="title">Details</ThemedText>
					</ThemedView>

					{"\n"}
					{details.map(({ label, value }) => (
						<ThemedText style={{ paddingVertical: 2 }}>
							<ThemedText
								style={[styles.detailKey, styles.subtitle]}
							>
								{label}:{" "}
							</ThemedText>
							<ThemedText
								style={[styles.detailValue, styles.subtitle]}
							>
								{value}
							</ThemedText>
						</ThemedText>
					))}
				</ThemedView>
				<ThemedView style={styles.detailsChild}>
					<ThemedView style={styles.title}>
						<ThemedText type="title">Specs</ThemedText>
					</ThemedView>

					{"\n"}
					{specs.map(({ label, value }) => (
						<ThemedText style={{ paddingVertical: 2 }}>
							<ThemedText
								style={[styles.detailKey, styles.subtitle]}
							>
								{label}:{" "}
							</ThemedText>
							<ThemedText
								style={[styles.detailValue, styles.subtitle]}
							>
								{value}
							</ThemedText>
						</ThemedText>
					))}
				</ThemedView>
			</ThemedView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	detailsPage: {
		padding: 20,
	},
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		minHeight: 300,
		maxHeight: 300,
		borderWidth: 1,
		borderColor: "#333",
		borderRadius: 20,
		marginBottom: 24,
		overflow: "hidden",
	},
	detailsContainer: {
		justifyContent: "center",
		gap: 20,
	},
	detailsChild: {},
	detailKey: { fontWeight: "bold" },
	detailValue: {
		maxWidth: 200,
	},
	title: {
		width: "100%",
		textAlign: "center",
		paddingBottom: 8,
	},
	subtitle: {
		color: "#cccccc",
	},
});

export default ProductDetails;
