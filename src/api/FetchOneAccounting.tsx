import axios from "axios";
import { AccTypeId } from "../components/Accounting/AccountingsType";

export const getOneAccounting = (id: string) => axios.get<AccTypeId>("http://192.168.100.111:8000/oneAccounting", 
    {
        params: {
            id
        }
    }
);
