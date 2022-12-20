import { AppParamList } from "../routes/AppStack";

declare global {
    namespace ReactNavigation{
        interface RootParamList extends AppParamList {}
    }
}