import { httpClient } from "@/shared/http-service";
import { WEATHER_URL, GEO_URL, API_KEY } from "@/config";

export const getWeather = (lat, lon) => {
    return httpClient.get(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`).then(res => res);
}

export const getPosition = (ciudad) => {
    return httpClient.get(`${GEO_URL}?q=${ciudad}&appid=${API_KEY}`).then(res => res);
}