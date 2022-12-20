import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { useAuth } from "../hooks/useAuth";

export const Router = () => {
    const { auth } = useAuth();
    return (
        <NavigationContainer>
            {auth ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};