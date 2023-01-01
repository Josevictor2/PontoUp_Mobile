import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

export function formatDateISO(date: string): string {
  const DateReducer = date?.slice(0, 10);
  const dateFormat = DateReducer?.split('-').join('/');
  const newDate = new Date(dateFormat);
  const formatDate = format(newDate, 'dd MMM E', { locale: pt });
  return formatDate;
}
