/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { zodResolver } from '@hookform/resolvers/zod';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CreatePost, Schema } from './shema';
import * as DocumentPicker from 'expo-document-picker';

export const useJustify = () => {
  const [show, setShow] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreatePost>({
    resolver: zodResolver(Schema),
  });

  const onDateSelect = (_event: DateTimePickerEvent, dateInicio?: Date) => {
    setShow(false);
    setValue('startDate', dateInicio!, {
      shouldValidate: true,
    });
  };

  const onDateSelectEnd = (_event: DateTimePickerEvent, dateFinal?: Date) => {
    setShowEnd(false);
    setValue('endDate', dateFinal!, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handledShow = () => setShow(true);
  const handledShowEnd = () => setShowEnd(true);

  const date = watch('startDate');
  const dateEnd = watch('endDate');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success') {
        setValue('file', result.uri, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const SubmitForm = (data: CreatePost) => {
    console.log(data.file, data.select, data.startDate, data.endDate);
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
    pickDocument,
    handledShowEnd,
    showEnd,
  };
};
