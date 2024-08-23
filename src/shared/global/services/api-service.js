import { httpClient } from "@/shared/http-service";
import { WEATHER_URL, API_KEY } from "@/config";

export const getWeather = (ciudad) => {
    return httpClient.get(`${WEATHER_URL}?q=${ciudad}&appid=${API_KEY}&lang=es&units=metric`).then(res => res);
}