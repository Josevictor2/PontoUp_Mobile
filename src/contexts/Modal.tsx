import { createContext, FC, ReactNode, useState } from 'react';

export type ModalContext = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  modalStatus: number;
  setModalStatus: (modalStatus: number) => void;
  openSchedule: boolean;
  setOpenSchedule: (openSchedule: boolean) => void;
  openMyData: boolean;
  setOpenMyData: (openMyData: boolean) => void;
};

export const ModalContext = createContext({} as ModalContext);

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContextProvider: FC<ModalContextProviderProps> = ({
  children,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [modalStatus, setModalStatus] = useState<number>(0);
  const [openSchedule, setOpenSchedule] = useState<boolean>(false);
  const [openMyData, setOpenMyData] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        title,
        setTitle,
        modalStatus,
        setModalStatus,
        openSchedule,
        setOpenSchedule,
        openMyData,
        setOpenMyData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
