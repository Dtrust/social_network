import {Action} from "redux";
import { User } from "../../user/contracts/state";


export enum WhosReadActionsType {
    SET_ITEMS = 'whosRead/SET_ITEMS',
    FETCH_ITEMS = 'whosRead/FETCH_ITEMS',
};

export interface SetWhosReadItemsActionInterface extends Action<WhosReadActionsType> {
    type: WhosReadActionsType.SET_ITEMS;
    payload: User[];
};

export interface FetchWhosReadItemsActionInterface extends Action<WhosReadActionsType> {
    type: WhosReadActionsType.FETCH_ITEMS;
};

export const setWhosRead = (payload: User[]): SetWhosReadItemsActionInterface => ({
    type: WhosReadActionsType.SET_ITEMS,
    payload,
});

export type WhosReadActions =
    | SetWhosReadItemsActionInterface
    | FetchWhosReadItemsActionInterface;
