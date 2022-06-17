import {Publicacion} from '../models/publicacion.interface';
import { HttpMethods } from '../enums/http-methods.enum';

export const partialInitialValue: Partial<Publicacion> = {
  id: 0,
  body: '',
};
export const initialValue: Publicacion = {
  id: 0,
  body: '',
  title: '',
  userId: 0,
};

export const styleContainer = {
  marginLeft: 0,
  width: '100%',
};

export const loggearVerb = (verb: HttpMethods) =>  console.log(`******************* ESTAMOS EN ${verb} *******************`);