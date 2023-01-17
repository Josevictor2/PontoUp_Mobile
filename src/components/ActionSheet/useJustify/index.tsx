import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActionSchema } from '../shema';
import { ActionProps } from '../types';

export const useJustify = () => {
  const [show, setShow] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ActionProps>({
    resolver: yupResolver(ActionSchema),
  });

  const onDateSelect = (
    _event: DateTimePickerEvent,
    dateInicio?: Date | undefined,
  ) => {
    setShow(false);
    setValue('initData', dateInicio, {
      shouldValidate: true,
    });
  };

  const onDateSelectEnd = (
    _event: DateTimePickerEvent,
    dateFinal?: Date | undefined,
  ) => {
    setShowEnd(false);
    setValue('initEnd', dateFinal, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handledShow = () => setShow(true);
  const handledShowEnd = () => setShowEnd(true);

  const date = watch('initData');
  const dateEnd = watch('initEnd');

  const SubmitForm = (data: ActionProps) => {
    console.log(data.select, data.initData, data.initEnd);
  };

  return {
    show,
    control,
    handleSubmit,
    errors,
    onDateSelect,
    date,
    SubmitForm,
    handledShow,
    onDateSelectEnd,
    dateEnd,
    handledShowEnd,
    showEnd,
  };
};
