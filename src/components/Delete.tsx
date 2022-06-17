import {Grid, TextField, Button} from '@mui/material';
import {useState} from 'react';
import {deleteByAxios} from '../helpers/axios.helper';
import {deleteByFetch} from '../helpers/fetch.helper';
import {styleContainer} from '../helpers/utils';

export const Delete = () => {
  const [id, setId] = useState(1);

  const handleSubmit = async (isFetch?: boolean) => {
    const result = isFetch ? await deleteByFetch(id) : await deleteByAxios(id);
    console.log(result);
  };
  return (
    <>
      <section id="title">
        <h2>Delete</h2>
      </section>
      <Grid container spacing={4} className="container" style={styleContainer}>
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
        <Grid item xs={12}>
          <Button style={{marginRight: 10}} variant="outlined" onClick={() => handleSubmit(true)}>
            Fetch{' '}
          </Button>
          <Button style={{marginRight: 10}} variant="outlined" onClick={() => handleSubmit()}>
            Axios
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
