import { format, isWeekend } from 'date-fns';
import { pt } from 'date-fns/locale';

export const currentDayIsWeekend = () => {
  const today = new Date();
  const isTodayWeekend = isWeekend(today);

  return isTodayWeekend;
};

export const formatDateISO = (date: string): string => {
  const DateReducer = date?.slice(0, 10);
  const dateFormat = DateReducer?.split('-').join('/');
  const newDate = new Date(dateFormat);
  const formatDate = format(newDate, 'dd MMM E', { locale: pt });
  return formatDate;
};
