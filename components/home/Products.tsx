import {ThemedView} from "../ThemedView";
import { StyleSheet } from "react-native";
import Card from "../ui/Card";
import {IProduct} from "@/@types";

const Products = ({ products }: IProps) => {
	return <ThemedView style={ styles.container }>
		{
			products.map((product: IProduct) => <Card
				id={ product._id }
				name={ product.name }
				price={ product.price }
				currency={ product.currency }
				image={ product.images[0] }
			/>)
		}
	</ThemedView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 16
	}
})

interface IProps {
	products: IProduct[]
}

export default Products;
