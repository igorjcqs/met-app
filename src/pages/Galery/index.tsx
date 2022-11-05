import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchNftByToken } from "../../services/assets";
import { styles } from "./styles";

export default function Galery({ navigation }: any) {
  const [data, setData] = useState([{}]);

  const fetchAPI = async () => {
    try {
      const response = await fetchNftByToken();

      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hi, Julia</Text>
          <Text style={styles.subtitle}>
            Today is a good day to show your NFT's
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <FlatList
            style={styles.list}
            data={data}
            numColumns={2}
            keyExtractor={(item: any) => item.id}
            renderItem={(item: any) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    name: item.item.name,
                    image: item.item.image,
                    qrcodeImage: item.item.qr_code,
                    network: item.item.network,
                  })
                }
              >
                <View style={styles.card}>
                  <ImageBackground
                    style={styles.cardImage}
                    source={{
                      uri: item.item.image,
                    }}
                  >
                    <View
                      style={
                        (item.item.network === "ETHEREUM" && {
                          width: 30,
                          height: 30,
                          backgroundColor: "#fff",
                          borderRadius: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 10,
                        }) ||
                        (item.item.network === "ETHEREUM_GOERLI" && {
                          width: 30,
                          height: 30,
                          backgroundColor: "#fff",
                          borderRadius: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 10,
                        }) ||
                        (item.item.network === "POLYGON" && {
                          width: 30,
                          height: 30,
                          backgroundColor: "#fff",
                          borderRadius: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 10,
                        }) ||
                        (item.item.network === "POLYGON_MUMBAI" && {
                          width: 30,
                          height: 30,
                          backgroundColor: "#8247e5",
                          borderRadius: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 10,
                        })
                      }
                    >
                      {
                        <Image
                          source={
                            (item.item.network === "ETHEREUM" &&
                              require(`./img/ethereum.png`)) ||
                            (item.item.network === "POLYGON" &&
                              require(`./img/polygon.png`)) ||
                            (item.item.network === "ETHEREUM_GOERLI" &&
                              require(`./img/ethereum.png`)) ||
                            (item.item.network === "POLYGON_MUMBAI" &&
                              require(`./img/polygon.png`))
                          }
                          style={{ width: 20, height: 20 }}
                        />
                      }
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>

        <View style={styles.navegation}>
          <TouchableOpacity onPress={() => fetchAPI()}>
            <Image
              source={require("./img/reload.png")}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: "rgba(17, 17, 17, 1)" }}
      />
    </>
  );
}
