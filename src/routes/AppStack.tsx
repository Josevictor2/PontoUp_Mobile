import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { JustificationScreen } from "../screens/Justification";
import { DrawerRouter } from "./Drawer";

export type AppParamList = Record<"Home" | "Drawer" |"Justification" , undefined>;

const Stack = createNativeStackNavigator<AppParamList>();

export const AppStack = () => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Drawer" component={DrawerRouter} />
            <Stack.Screen name="Justification" component={JustificationScreen} />
        </Stack.Navigator>
    );
};