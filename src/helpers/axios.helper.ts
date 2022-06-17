import axios from 'axios';
import {HttpMethods} from '../enums/http-methods.enum';
import {Publicacion} from '../models/publicacion.interface';
import {loggearVerb} from './utils';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPostsByAxios = async () => {
  loggearVerb(HttpMethods.GET);
  const response = await axios.get<Publicacion[]>(URL);
  console.log({response});
  return response.data;
};

export const getPostByIdByAxios = async (id: number) => {
  loggearVerb(HttpMethods.GET);
  const response = await axios.get<Publicacion[]>(`${URL}/${id}`);
  console.log({response});
  return response.data;
};

export const postByAxios = async (payload: Publicacion) => {
  loggearVerb(HttpMethods.POST);
  const response = await axios.post<Publicacion>(URL, payload);
  console.log({response});
  return response.data;
};

export const putByAxios = async (id?: number, payload?: Partial<Publicacion>) => {
  loggearVerb(HttpMethods.PUT);
  const response = await axios.put<Publicacion>(`${URL}/${id}`, payload);
  console.log({response});
  return response.data;
};

export const patchByAxios = async (id: number, payload: Publicacion) => {
  loggearVerb(HttpMethods.PATCH);
  const response = await axios.patch<Publicacion>(`${URL}/${id}`, payload);
  console.log({response});
  return response.data;
};

export const deleteByAxios = async (id: number) => {
  loggearVerb(HttpMethods.DELETE);
  const response = await axios.delete(`${URL}/${id}`);
  console.log({response});
  return response.data;
};
