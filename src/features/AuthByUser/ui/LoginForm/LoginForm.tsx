import { Button } from '@mui/material';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { BasicInput } from 'shared/ui/BasicInput/BasicInput';
import { getLoginMail } from '../../model/selectors/getLoginMail/getLoginMail';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {

  const dispatch = useAppDispatch();

  const email = useSelector(getLoginMail);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);

  // Функиця useCallback нужна для того, чтобы не создавать новую функцию при каждом рендере
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ email, password }))

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }

  }, [onSuccess, dispatch, email, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true} >
      {error && <div>{error}</div>}
      <BasicInput onChange={onChangeUsername} value={email} />
      <BasicInput onChange={onChangePassword} value={password} />
      <Button onClick={onLoginClick}>Войти</Button>
    </DynamicModuleLoader>
  )
})

export default LoginForm;