import { StateSchema } from "app/provider/StoreProvider";

// Функция, которая возвращает значение счетчика из хранилища
export const getCounter = (state: StateSchema) => state.counter;