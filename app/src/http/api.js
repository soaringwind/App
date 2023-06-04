import $http from "./index.js";

export const getData = $http.get('http://jsonplaceholder.typicode.com/posts')