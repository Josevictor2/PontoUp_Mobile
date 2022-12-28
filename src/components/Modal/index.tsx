import { HStack, Modal, Text, VStack, Button, Slide } from 'native-base';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useModal } from '@hooks/useModal';
import { useSubTitle } from '@components/helpers/useSubTitle';
import { useFontSize } from '@theme/responsiveFontSize';

export const ModalComponent = () => {
  const { showModal, setShowModal, title, modalStatus } = useModal();
  const { sub0, sub1, sub2, sub3 } = useSubTitle();
  const { FontSize } = useFontSize();

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
              <Text color="#F8F2FA" fontFamily="body" fontSize={FontSize(18)}>
                {title}
              </Text>
              {modalStatus === 0 && sub0()}
              {modalStatus === 1 && sub1()}
              {modalStatus === 2 && sub2()}
              {modalStatus === 3 && sub3()}
            </VStack>
          </Modal.Body>
          <Modal.Footer bg="white">
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
                bg="primary.700"
                borderColor="primary.700"
                _text={{
                  color: 'primary.100',
                  fontSize: { base: 'md', md: 'lg' },
                  fontFamily: 'body',
                  fontWeight: '400',
                }}
              >
                Cancelar
              </Button>
              <Button
                bg="primary.100"
                _text={{
                  color: 'white',
                  fontSize: { base: 'md', md: 'lg' },
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
