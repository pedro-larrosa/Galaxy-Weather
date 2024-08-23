//Archivo para tener un acceso rápido y fácil a la api en el caso que tuvieramos que utilizarla en distintos archivos varias veces

import axios from "axios";
import { BASE_URL } from "@/config";

const config = {
    baseUrl: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

const httpClient = axios.create(config);

export { httpClient };