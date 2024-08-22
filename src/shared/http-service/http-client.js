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