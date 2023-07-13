import { AppDispatch } from "app/provider/StoreProvider";
import { useDispatch } from "react-redux";

// Хук, который возвращает функцию dispatch хранилища Redux.
export const useAppDispatch = () => useDispatch<AppDispatch>();