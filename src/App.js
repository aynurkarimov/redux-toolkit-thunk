import { useSelector, useDispatch } from 'react-redux'
import { Typography, IconButton, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { increment, decrement, reset } from './store/features/counter';
import { changeTheme } from './store/features/theme';
import { requestDog } from './store/features/dogs';

import './styles.css';

function App() {
  const dispatch = useDispatch();

  const counterNumber = useSelector(state => state.counter.number);
  const themeGlobal = useSelector(state => state.theme.color);
  const dogsGlobal = useSelector(state => state.dogs.dogs);

  return (
    <div className="app">
      <main className="main" style={{ background: themeGlobal }}>
        <Typography fontSize={24}>
          counter: {counterNumber}
        </Typography>

        <div className="main__buttons">
          <IconButton onClick={() => dispatch(decrement())}>
            <RemoveCircleIcon color="error" />
          </IconButton>
          <IconButton onClick={() => dispatch(increment())}>
            <AddCircleIcon color="primary" />
          </IconButton>
        </div>

        <Button variant="outlined" onClick={() => dispatch(reset())}>Reset</Button>

        <hr />

        <Typography fontSize={24}>
          Choose the theme for the app!
        </Typography>

        <select onChange={(e) => dispatch(changeTheme(e.target.value))}>
          <option value="white">White</option>
          <option value="orange">Orange</option>
          <option value="violet">Violet</option>
        </select>

        <Button 
          variant="contained" 
          color="info" 
          style={{ margin: '1em 0' }} 
          onClick={() => dispatch(requestDog())}>
          Fetch a dog!
        </Button>

        {dogsGlobal && dogsGlobal.map((dog, index) => (
            <div>
              <img src={dog.message} key={index} alt={"dog"} width="150" height="auto" />
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default App;
