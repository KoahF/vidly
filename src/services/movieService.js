import http from './httpService';
import { apiUrl } from '../config.json';

export function getMovies() {
    return http.get(apiUrl + '/movies');
}

export function getMovie(movieId) {
    return http.get(apiUrl + '/movies' + '/' + movieId);
}
export function deleteMovie(movieId) {
    return http.delete(apiUrl + '/movies' + '/' + movieId);
}

export function saveMovie(movie) {
    const isExisted = movie._id;
    if (isExisted) {
        const body = { ...movie };
        delete body._id;
        return http.put(apiUrl + '/movies/' + movie._id, body);
    }

    return http.post(apiUrl + '/movies', movie);
}