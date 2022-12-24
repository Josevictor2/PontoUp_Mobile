import { Input as NativeInput, IInputProps, FormControl } from "native-base";

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
        borderColor="primary.900"
        isInvalid={invalid}
        borderWidth={2}
        {...props}
        _focus={{
          bg: "secondary.50",
          borderColor: "primary.900",
        }}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
