import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { testFn } from "src/store/apps/stories/stories.store";
import { AppState } from "src/store/store";

const useLoginController = () => {
  const loginForm = useForm({
    mode: "onSubmit",
  });

  const { test } = useSelector((state: AppState) => state.storiesReducers);
  const dispatch = useDispatch();

  const handleSubmit = async (data: any) => {
    const { email, password } = data;
    dispatch(testFn("Hello from login controller"));
  };

  return {
    loginForm,
    handleSubmit,
  };
};

export default useLoginController;
