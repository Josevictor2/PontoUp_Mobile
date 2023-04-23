import { useState } from 'react';

import { startOfToday, format, parse, add, isAfter } from 'date-fns';
import { pt } from 'date-fns/locale';

export const useViewCards = () => {
  const today = startOfToday();

  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function previusMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function disabledNext() {
    return isAfter(firstDayCurrentMonth, today);
  }
  function formatMonthYear() {
    return format(firstDayCurrentMonth, 'MMM, yyyy', { locale: pt });
  }

  return {
    nextMonth,
    previusMonth,
    disabledNext,
    formatMonthYear,
    firstDayCurrentMonth,
  };
};
