import { LoadingStatus } from "../../../types";
import { User } from "../../user/contracts/state";


export interface WhosReadState {
    items: User[];
    loadingState: LoadingStatus;
}
