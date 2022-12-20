import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, Input, Modal, Select, Text, VStack } from "native-base";
import { useState } from "react";
import { ActionSchema } from "./shema";

export const Example = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return <>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="0" size="full" >
          <Modal.Content h="600px">
            <Modal.CloseButton />
            <Modal.Header>Forgot Password?</Modal.Header>
            <Modal.Body>
              Enter email address and we'll send a link to reset your password.
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button flex="1" onPress={() => {
              setModalVisible(false);
            }}>
                Proceed
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <VStack space={8} alignItems="center">
          <Button w="104" onPress={() => {
          setModalVisible(!modalVisible);
        }}>
            Open Modal
          </Button>
          <Text textAlign="center">
            Open modal and focus on the input element to see the effect.
          </Text>
        </VStack>
      </>;
  };