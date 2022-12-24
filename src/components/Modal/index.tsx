import { HStack, Modal, Text, VStack, Button, Slide } from 'native-base';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useModal } from '@hooks/useModal';
import { useSubTitle } from '@components/helpers/useSubTitle';

export const ModalComponent = () => {
  const { showModal, setShowModal, title, modalStatus } = useModal();
  const { sub0, sub1, sub2, sub3 } = useSubTitle();

  return (
    <Modal safeArea isOpen={showModal} onClose={() => setShowModal(false)}>
      <Slide
        duration={500}
        alignItems="center"
        justifyContent="center"
        flex={1}
        placement="top"
        in={showModal}
      >
        <Modal.Content w={wp(87)}>
          <Modal.Body
            h="100%"
            bg={{
              linearGradient: {
                colors: ['#30663C', '#2C823F', '#30663C'],
                start: [0, 0],
                end: [0.9, 0.3],
              },
            }}
          >
            <VStack space={2} justifyItems="center" alignItems="center">
              <Text color="secondary.50" fontFamily="body" fontSize="lg">
                {title}
              </Text>
              {modalStatus === 0 && sub0()}
              {modalStatus === 1 && sub1()}
              {modalStatus === 2 && sub2()}
              {modalStatus === 3 && sub3()}
            </VStack>
          </Modal.Body>
          <Modal.Footer bg="secondary.50">
            <HStack
              flex={1}
              justifyContent="center"
              alignItems="center"
              space="md"
            >
              <Button
                width={wp(35)}
                variant="outline"
                onPress={() => setShowModal(false)}
                bg="rgba(48, 102, 60, 0.1)"
                borderColor="rgba(48, 102, 60, 0.1)"
                _text={{
                  color: 'text.300',
                  fontSize: 'md',
                  fontFamily: 'body',
                  fontWeight: '400',
                }}
              >
                Cancelar
              </Button>
              <Button
                bg="text.300"
                _text={{
                  color: 'white',
                  fontSize: 'md',
                  fontFamily: 'body',
                  fontWeight: '400',
                }}
                width={wp(35)}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Sim
              </Button>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Slide>
    </Modal>
  );
};
