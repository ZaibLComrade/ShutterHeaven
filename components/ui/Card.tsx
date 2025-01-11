import { Link } from "expo-router";
import { ThemedText } from "../ThemedText";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

interface CardProps {
	id: string | number;
	name: string;
	price: number;
	currency: string;
	image: string; // URL or local asset path
	onPress?: (id: string | number) => void; // Optional: Handle card click
}

const Card: React.FC<CardProps> = ({
	id,
	name,
	price,
	currency,
	image,
	onPress,
}) => {
	const handlePress = () => {
		if (onPress) {
			onPress(id);
		}
	};

	return (
		<Link
			href={{
				pathname: "/products/[id]",
				params: { id },
			}}
			asChild
		>
			<TouchableOpacity style={styles.card} onPress={handlePress}>
				<Image source={{ uri: image }} style={styles.image} />
				<View style={styles.info}>
					<ThemedText style={styles.name}>{name}</ThemedText>
					<ThemedText style={styles.price}>
						{currency} {price.toFixed(2)}
					</ThemedText>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "90%",
		backgroundColor: "#111",
		borderRadius: 10,
		overflow: "hidden",
		marginVertical: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3, // For Android shadow
		alignSelf: "center",
	},
	image: {
		width: "100%",
		height: 150,
	},
	info: {
		padding: 15,
	},
	name: {
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 5,
	},
	price: {
		fontSize: 16,
		color: "#555",
	},
});

// const Card = ({ id, name, price, currency, image }: IProps) => {
// 	return (
// 		<ThemedView style={styles.container}>
// 			<View style={styles.imgContainer}>
// 				<Image src={image} style={styles.img}/>
// 			</View>
// 			<View style={ styles.content }>
// 				<ThemedText>{name}</ThemedText>
// 				<ThemedText>{`${price} ${currency}`}</ThemedText>
// 			</View>
// 		</ThemedView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: "#151515",
// 		padding: 4,
// 		borderWidth: 1,
// 		borderRadius: 20,
// 		width: "100%",
// 		gap: 4
// 	},
// 	imgContainer: {
// 		borderRadius: 16,
// 		borderWidth: 1,
// 		height: 150,
// 	},
// 	img: {},
// 	content: {
// 		padding: 8,
// 	},
// });

// interface IProps {
// 	id: string;
// 	name: string;
// 	price: number;
// 	currency: string;
// 	image: string;
// }

export default Card;
