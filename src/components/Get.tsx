import {Button, Grid, TextField} from '@mui/material';
import {getPostsByFetch, getPostByIdByFetch} from '../helpers/fetch.helper';
import {getPostsByAxios, getPostByIdByAxios} from '../helpers/axios.helper';
import {useState} from 'react';
import {styleContainer} from '../helpers/utils';

export const Get = () => {
  const [id, setId] = useState(1);

  const handleGet = async (isFetch?: boolean) => {
    const result = isFetch ? await getPostsByFetch() : await getPostsByAxios();
    console.log(result);
  };
  const handleGetById = async (isFetch?: boolean) => {
    const result = isFetch ? await getPostByIdByFetch(id) : await getPostByIdByAxios(id);
    console.log(result);
  };

  return (
    <>
      <section id="title">
        <h2> Get </h2>
      </section>
      <Grid container spacing={4} className="container" style={styleContainer}>
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h2> Get All</h2>
            </Grid>
            <Grid item xs={12}>
                <Button style={{marginRight: 10}} variant="outlined" onClick={() => handleGet(true)}>
                  Fetch
                </Button>
                <Button style={{marginRight: 10}} variant="outlined" onClick={() => handleGet()}>
                  Axios
                </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h2> Get By Id</h2>
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="id"
                name="id"
                label="Id"
                variant="outlined"
                onChange={({target}) => setId(Number(target.value))}
                value={id}
                type="number"
              />
            </Grid>

            <Grid item xs={6}>
                <Button style={{marginRight: 10}} variant="outlined" onClick={() => handleGetById(true)}>
                  Fetch
                </Button>
                <Button style={{marginRight: 10}} variant="outlined" onClick={() => handleGetById()}>
                  Axios
                </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
