import { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Date from "./components/Date";
import { styles } from "./styles";

export default function Details({ route, navigation }: any) {
  const [QRcode, setQRcode] = useState(false);
  const { name, image, qrcodeImage, network } = route.params;

  function transformNetwork(network: string) {
    switch (network) {
      case "ETHEREUM":
        return "Ethereum";

      case "ETHEREUM_GOERLI":
        return "Ethereum Goerli";

      case "POLYGON":
        return "Polygon";

      case "POLYGON_MUMBAI":
        return "Polygon Mumbai";
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Galery");
          }}
        >
          <Image
            source={require("./img/arrow.png")}
            style={{ width: 30, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.warning}>
        <Text style={styles.warn}>Click on the image</Text>
        <Text style={styles.warn}>to see the QR Code</Text>
      </View>
      <TouchableOpacity
        onPress={() => setQRcode(false)}
        activeOpacity={1}
        style={QRcode ? { display: "flex" } : { display: "none" }}
      >
        <View style={styles.nft}>
          <Image
            source={{ uri: qrcodeImage }}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setQRcode(true)}
        activeOpacity={1}
        style={QRcode ? { display: "none" } : { display: "flex" }}
      >
        <View style={styles.nft}>
          <Image source={{ uri: image }} style={{ width: 320, height: 320 }} />
        </View>
      </TouchableOpacity>
      <Text style={styles.nftName}>{name}</Text>
      <View style={styles.infos}>
        <View style={styles.info}>
          <View style={styles.left}>
            <Text style={styles.leftText}>Network</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.rightText}>{transformNetwork(network)}</Text>
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.left}>
            <Text style={styles.leftText}>Authentication date</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.rightText}>
              <Date day="01" month="12" year="2022" />
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
