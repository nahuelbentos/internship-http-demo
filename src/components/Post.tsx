import {useEffect, useState} from 'react';
import { Grid, TextField, Button} from '@mui/material';
import {Publicacion} from '../models/publicacion.interface';
import { initialValue, styleContainer } from '../helpers/utils';
import {postByFetch} from '../helpers/fetch.helper';
import {postByAxios} from '../helpers/axios.helper';

export const Post = () => {
  const [data, setData] = useState<Publicacion>(initialValue);
  useEffect(() => {
    console.log({data});
  }, [data]);

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setData({...data, [name]: value});
  };

  const handleSubmit = async (isFetch?: boolean) => {
    const result =  isFetch ? await postByFetch(data) : await postByAxios(data);
    console.log(result);
  };
  return (
    <>
      <section id="title">
        <h2>Post</h2>
      </section>
      <Grid container spacing={4} className="container" 
        style={styleContainer}>
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
