import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchGamesData } from "../model/service/fetchGamesData";
import { useSelector } from "react-redux";
import { getGames } from "../model/selectors/getGames/getGames";
import BasicTable from "shared/ui/BasicTable/BasicTable";

export const Games = () => {
  const data = useSelector(getGames);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  const tableColumns = [
    { key: 'name', label: 'Название' },
    { key: 'price', label: 'Цена' },
    { key: 'sale', label: 'Размер скидки' },
    { key: 'oldPrice', label: 'Старая цена' },
    { key: 'link', label: 'Открыть' },
  ];

  return (
    <>
      {
        Array.isArray(data) && data.length > 0 &&
        <BasicTable rows={data} columns={tableColumns} />
      }
    </>
  );
};