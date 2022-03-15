import axios from "axios";

export const deleteAccounting = (id: string) => axios.delete<string>("http://192.168.100.111:8000/deleteAccounting", 
    {
        data: { id }
    }
);
