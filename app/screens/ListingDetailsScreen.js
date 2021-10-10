import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppiText from "../components/AppStyles/AppText";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/Images/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppiText style={styles.title}>Red jacket for sale</AppiText>
        <AppiText style={styles.price}>$100</AppiText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/Images/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
