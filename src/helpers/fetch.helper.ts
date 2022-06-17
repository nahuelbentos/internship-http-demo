import {Publicacion} from '../models/publicacion.interface';
import {HttpMethods} from '../enums/http-methods.enum';
import {loggearVerb} from './utils';

const URL = 'https://jsonplaceholder.typicode.com/posts';
const HEADERS = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const getPostsByFetch = async () => {
  loggearVerb(HttpMethods.GET);
  const response = await fetch(URL);
  console.log({response});
  const data: Publicacion[] = await response.json();
  console.log({data});
  return data;
};

export const getPostByIdByFetch = async (id: number) => {
  loggearVerb(HttpMethods.GET);
  const response = await fetch(`${URL}/${id}`);
  console.log({response});
  const data: Publicacion = await response.json();
  console.log({data});
  return data;
};

export const postByFetch = async (payload: Publicacion) => {
  loggearVerb(HttpMethods.POST);
  const response = await fetch(URL, {
    method: HttpMethods.POST,
    body: JSON.stringify(payload),
    headers: HEADERS,
  });
  console.log({response});
  const data: Publicacion = await response.json();
  console.log({data});
  return data;
};

export const putByFetch = async (id?: number, payload?: Partial<Publicacion>) => {
  loggearVerb(HttpMethods.PUT);
  const response = await fetch(`${URL}/${id}`, {
    method: HttpMethods.PUT,
    body: JSON.stringify(payload),
    headers: HEADERS,
  });
  console.log({response});
  const data: Publicacion = await response.json();
  console.log({data});
  return data;
};

export const patchByFetch = async (id: number, payload: Publicacion) => {
  loggearVerb(HttpMethods.PATCH);
  const response = await fetch(`${URL}/${id}`, {
    method: HttpMethods.PATCH,
    body: JSON.stringify(payload),
    headers: HEADERS,
  });
  console.log({response});
  const data: Publicacion = await response.json();
  console.log({data});
  return data;
};

export const deleteByFetch = async (id: number) => {
  loggearVerb(HttpMethods.DELETE);
  const response = await fetch(`${URL}/${id}`, {
    method: HttpMethods.DELETE,
  });
  console.log({response});
  const data = await response.json();
  console.log({data});
  return data;
};

//TODO: Refactor code.
