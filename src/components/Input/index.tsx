import { Input as NativeInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string;
};

export const Input = ({ errorMessage, isInvalid, ...props }: Props) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <NativeInput
        fontSize="md"
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
