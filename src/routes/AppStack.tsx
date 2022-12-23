import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewRegisterScreen } from "../screens/ViewRegisterPoint";
import { DrawerRouter } from "./Drawer";

export type AppParamList = Record<"Home" | "Drawer" |"View" , undefined>;

const Stack = createNativeStackNavigator<AppParamList>();

export const AppStack = () => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Drawer" component={DrawerRouter} />
            <Stack.Screen name="View" component={ViewRegisterScreen} />
        </Stack.Navigator>
    );
};