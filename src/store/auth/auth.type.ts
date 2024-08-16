export type IStateAuthProps = IStateAuth & IStateAuthActions;

export interface IStateAuth {
  isLoading: boolean;
  isError: boolean;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface IStateAuthActions {
  login: (data: ILoginProps) => void;
}

export type SetState<T> = (newState: T | ((state: T) => T)) => void;
