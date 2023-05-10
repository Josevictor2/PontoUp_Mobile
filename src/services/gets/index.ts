import { api } from '../axios';

type Props = Record<'id', string>;

export async function getUser({ id }: Props) {
  const response = await api.get(`/user/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function getDepartment({ id }: Props) {
  const response = await api.get(`/department/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function getUserHour({ id }: Props) {
  const response = await api.get(`/workschedule/department/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export const fetchData = async () => {
  const res = await fetch('/api/currentDay');
  return res.json();
};

export async function getRegisterPoints({ id }: Props) {
  const response = await api.get(`/point/day/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function getWorkedHours({ id }: Props) {
  const response = await api.get(`/point/findWorkedHours/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

type GetRangerPoint = Record<'id' | 'lastDayMonth' | 'month' | 'year', string>;

export async function getRangerPoints({
  id,
  lastDayMonth,
  month,
  year,
}: GetRangerPoint) {
  const response = await api.get(
    `point/date/${id}/?start=${year}-${month}-01&end=${year}-${month}-${lastDayMonth}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
}

type GetRangerEvent = Omit<GetRangerPoint, 'id'>;

export async function getRangerEvent({
  lastDayMonth,
  month,
  year,
}: GetRangerEvent) {
  const response = await api.get(
    `event/?start=${year}-${month}-01&end=${year}-${month}-${lastDayMonth}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
}
