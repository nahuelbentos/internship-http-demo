import {Header} from './Header';
import {HttpMethods} from '../enums/http-methods.enum';
import {useState} from 'react';
import {Get} from './Get';
import {Post} from './Post';
import {Put} from './Put';
import {Patch} from './Patch';
import {Delete} from './Delete';

export const Main = () => {
  const [httpMethod, setHttpMethod] = useState<HttpMethods | undefined>(undefined);

  const handleViewComponent = (httpVerb: HttpMethods) => setHttpMethod(httpVerb);
  const renderComponent = (httpVerb: HttpMethods) => {
    switch (httpVerb) {
      case HttpMethods.GET:
        return <Get />;
      case HttpMethods.POST:
        return <Post />;
      case HttpMethods.PUT:
        return <Put />;
      case HttpMethods.PATCH:
        return <Patch />;
      case HttpMethods.DELETE:
        return <Delete />;
    }
  };
  return (
    <>
      <Header viewHttpComponent={handleViewComponent} />
      {httpMethod && renderComponent(httpMethod)}
    </>
  );
};
