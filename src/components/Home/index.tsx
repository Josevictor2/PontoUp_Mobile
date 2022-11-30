import React from "react";
import {Center, Text} from "native-base"

export function Home(){
    return (
        <Center flex={1} safeArea>
            <Text color="amber.400" fontFamily="body" fontWeight="400" fontStyle="normal" >Home</Text>
        </Center>
    )
}