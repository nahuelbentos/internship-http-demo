import {Button, ButtonGroup} from '@mui/material';
import {HttpMethods} from '../enums/http-methods.enum';

interface Props {
  viewHttpComponent: (httpMethod: HttpMethods) => void;
}

export const Header = ({viewHttpComponent}: Props) => {
  const handleAction = (httpMethod: HttpMethods) => viewHttpComponent(httpMethod);

  return (
    <header>
      <h1>HTTP Methods - Introduction</h1>
      <hr />
      <section  style={{ marginBottom: 0 }} >
        <ButtonGroup variant="contained" aria-label="outlined primary button group" >
          <Button onClick={() => handleAction(HttpMethods.GET)}>{HttpMethods.GET}</Button>
          <Button onClick={() => handleAction(HttpMethods.POST)}>{HttpMethods.POST}</Button>
          <Button onClick={() => handleAction(HttpMethods.PUT)}>{HttpMethods.PUT}</Button>
          <Button onClick={() => handleAction(HttpMethods.PATCH)}>{HttpMethods.PATCH}</Button>
          <Button onClick={() => handleAction(HttpMethods.DELETE)}>{HttpMethods.DELETE}</Button>
        </ButtonGroup>
      </section>
    </header>
  );
};
