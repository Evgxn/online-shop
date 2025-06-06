import { StyleSheet, Text, View, Image } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation";
// import { CustomButton } from "./src/components/UI/CustomButton";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F2F0F7',
  },
};


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>фывфывфы</Text>
    //   <CustomButton title="Press me pls" fillColor="#53B175" size="m" />
    //   <View>
    //     <Image source={require("./assets/TapBarSVG/Cart.svg")} />
    //   </View>
    // </View>
    <NavigationContainer theme={MyTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
