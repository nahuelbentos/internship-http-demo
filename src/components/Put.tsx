import {Grid, TextField, Button} from '@mui/material';
import {useState} from 'react';
import {putByAxios} from '../helpers/axios.helper';
import {putByFetch} from '../helpers/fetch.helper';
import {initialValue, styleContainer} from '../helpers/utils';
import {Publicacion} from '../models/publicacion.interface';

export const Put = () => {
  const [data, setData] = useState<Publicacion>(initialValue);

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setData({...data, [name]: value});
  };

  const handleSubmit = async (isFetch?: boolean) => {
    const {id} = data;
    const result = isFetch ? await putByFetch(id, data) : await putByAxios(id, data);
    console.log(result);
  };
  return (
    <>
      <section id="title">
        <h2>Put</h2>
      </section>
      <Grid container spacing={4} className="container" style={styleContainer}>
        <Grid item xs={6}>
          <TextField id="id" name="id" label="Id" variant="outlined" onChange={handleChange} value={data.id} type="number" />
        </Grid>
        <Grid item xs={6}>
          <TextField id="title" name="title" label="Title" variant="outlined" onChange={handleChange} value={data.title} type="text" />
        </Grid>
        <Grid item xs={6}>
          <TextField id="body" name="body" label="Body" variant="outlined" onChange={handleChange} value={data.body} type="text" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="userId"
            name="userId"
            label="UserId"
            variant="outlined"
            onChange={handleChange}
            value={data.userId}
            type="number"
          />
        </Grid>
      </Grid>
      <section id="actions" className="buttons">
        <Button variant="outlined" onClick={() => handleSubmit(true)}>
          Fetch{' '}
        </Button>
        <Button variant="outlined" onClick={() => handleSubmit()}>
          Axios
        </Button>
      </section>
    </>
  );
};
