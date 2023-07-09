import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

const ShortDescriptionBlock = () => {
  const navigation = useNavigation();

  const myIcon = <Icon name="right" size={18} color="#fff" />;

  return (
    <View className="bg-main py-5 w-[100vw]">
      <Text
        numberOfLines={6}
        className="text-[#BFE0FF] text-lg px-3"
        style={{ fontFamily: "codeNext" }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quisquam, aliquam animi itaque nobis et consequuntur temporibus
        repellendus quod voluptate atque tenetur natus nesciunt ullam neque vel
        sit fuga ad perspiciatis quam quae. Saepe pariatur commodi ex possimus
        molestiae blanditiis minus alias esse sapiente ducimus inventore rem,
        magnam itaque maxime vero corporis officiis sit culpa exercitationem
        asperiores tempora earum. Molestias, suscipit reiciendis molestiae eum
        eveniet dolores voluptatibus voluptatem ipsam at minus, voluptates
        delectus obcaecati? A consectetur aspernatur illum odit non nostrum,
        quas unde dicta, incidunt perferendis sint quo impedit voluptatem, nulla
        ratione nam officiis exercitationem blanditiis? At nemo nobis
        reprehenderit!
      </Text>
      <TouchableOpacity
        className="w-full items-center pt-5"
        onPress={() => {
          navigation.navigate("Description");
        }}
      >
        <Text className="text-white text-lg">See more {myIcon}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShortDescriptionBlock;
