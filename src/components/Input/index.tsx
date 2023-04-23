import { useFontSize } from '@theme/responsiveFontSize';
import { Input as NativeInput, IInputProps, FormControl } from 'native-base';

type InputType = IInputProps & {
  errorMessage?: string;
};

export const Input = ({ errorMessage, isInvalid, ...props }: InputType) => {
  const invalid = !!errorMessage || isInvalid;
  const { FontSize } = useFontSize();
  return (
    <FormControl isInvalid={invalid}>
      <NativeInput
        fontSize={FontSize(16)}
        h={12}
        borderColor="primary.100"
        isInvalid={invalid}
        borderWidth={2}
        {...props}
        _focus={{
          bg: 'white',
          borderColor: 'primary.100',
        }}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
