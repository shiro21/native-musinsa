import { Alert, Button } from "react-native";

const Buttons = () => {
    return (
        <Button title="클릭버튼" onPress={() => Alert.alert('Simple Button pressed')} />
    );
}

export default Buttons;