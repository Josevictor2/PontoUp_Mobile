import { AppParamList } from '@routes/AppStack';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends AppParamList {}
  }
}
