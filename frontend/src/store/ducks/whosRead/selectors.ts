import { WhosReadState } from "./contracts/state";
import { RootState } from "../../store";


export const selectWhosRead = (state: RootState): WhosReadState => state.whosRead;

export const selectWhosReadItems = (state: RootState): WhosReadState['items'] => state.whosRead.items;

