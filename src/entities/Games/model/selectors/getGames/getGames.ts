import { StateSchema } from "app/provider/StoreProvider";
import { GamesData } from "../../types/games";

export const getGames = (state: StateSchema): GamesData | null => state?.gamesData?.data || null;
