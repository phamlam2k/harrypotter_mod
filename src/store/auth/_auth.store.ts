import create from "../createStore";
import { actions } from "./auth.action";
import { IStateAuth } from "./auth.type";

const initialState: IStateAuth = { isLoading: false, isError: false };

const useAuthStore = create(initialState, actions);

export default useAuthStore;
