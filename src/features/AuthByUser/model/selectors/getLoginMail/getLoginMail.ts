import { StateSchema } from "app/provider/StoreProvider";

export const getLoginMail = (state: StateSchema) => state?.loginForm?.email || '';