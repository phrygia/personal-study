import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

// 시작 화면 역할을 하는 컴포넌트
const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;
