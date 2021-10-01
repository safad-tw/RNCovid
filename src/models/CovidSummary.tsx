
import { GlobalData} from "./GlobalData";
import { Country } from "./Country";

export interface CovidSummary {
    Global:GlobalData,
    Countries: [Country]
}