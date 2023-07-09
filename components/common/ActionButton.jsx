import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ActionButton = ({ btnText, onPress }) => {
  return (
  
  <TouchableOpacity onPress={onPress} className="bg-transparent p-4 mx-5 items-center justify-center" style={styles.button}>
  <Text style={{fontFamily:"codeNext"}} className="text-white text-[32px]">{btnText}</Text>
  </TouchableOpacity>);
};


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'white',
      borderWidth: 6,
      borderRadius: 44,
      paddingVertical: 10,
      paddingHorizontal: 20, // You can adjust this value for your needs
    },
    text: {
      fontSize: 16, // You can adjust this value for your needs
    },
  });

export default ActionButton;
