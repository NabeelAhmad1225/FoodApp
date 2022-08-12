import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image , FlatList, ScrollView} from "react-native";
import Screen from "./Screen";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function Details({ route, navigation }) {
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const { item } = route.params;
  

  const renderIngredientsItem = ({item}) => {
    return(
        <View style={[styles.ingrdientItemWrapper , {
            marginLeft: item.id == '1' ? 20 : 0, 
        }]}>
            <Image source={item.image} style={styles.ingrdienImage} />
        </View>
    )
  }


  return (
    <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
      {/* header */}
      <Screen>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </Screen>
      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>
      {/* Pizza-Info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
      {/* Ingrdients */}
      <View style={styles.ingrdientsWrapper}>
        <Text style={styles.ingrdientsTitle}>Ingrdients</Text>
        <View style={styles.ingrdientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
          />
        </View>
      </View>
      {/* Place an order */}
      <TouchableOpacity onPress={() => alert("Your order has been placed:")}>
         <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Place an order</Text>
            <Feather name="chevron-right" size={18} color={colors.black} />
          </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
    color: colors.textDark,
    width: "75%",
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
    color: colors.textLight,
  },
  infoItemText: {
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
    color: colors.textDark,
  },
  itemImage: {
    resizeMode: "contain",
    marginLeft: 20,
  },
  ingrdientsWrapper: {
    marginTop: 40,
  },
  ingrdientsTitle: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: colors.textDark,
  },
  ingrdientsListWrapper: {
    paddingVertical: 20,
  },
  ingrdientItemWrapper: {
     backgroundColor: colors.white,
     alignItems: "center",
     justifyContent: "center",
     paddingHorizontal: 10,
     marginRight: 15,
     borderRadius: 15,
     shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
ingrdienImage: {
    resizeMode: "contain",
},
orderWrapper: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
},
orderText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    marginRight: 10,
},
            
});

export default Details;
