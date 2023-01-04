import { memo } from 'react';
import { PrincipalDrawer } from '@components/PrincipalDrawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useModal } from '@hooks/useModal';
import { MySchedule } from '@components/MySchedule';
import { MyData } from '@components/MyData';
import { AnimatePresence } from 'moti';

export const CustomDrawer = memo((props: DrawerContentComponentProps) => {
  const { openSchedule, openMyData } = useModal();
  const isTrue = openSchedule || openMyData;
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {openSchedule ? <MySchedule {...props} /> : null}
        {openMyData ? <MyData {...props} /> : null}
        {isTrue ? null : <PrincipalDrawer {...props} />}
      </AnimatePresence>
    </>
  );
});
