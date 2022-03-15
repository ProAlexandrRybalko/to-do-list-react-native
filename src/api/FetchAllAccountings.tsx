import axios from "axios";
import { AccountingsSum } from "../components/Accounting/AccountingsType";

export const getAllAccountings = () => axios.get<AccountingsSum>("http://192.168.100.111:8000/allAccountings");
