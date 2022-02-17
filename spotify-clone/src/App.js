
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
// npm i spotify-web-api-js  => to access spotify web api 
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

// to use any value from datalayer we use this in file
import { useDataLayerValue } from './DataLayer';

// creating a new instace of spotify web api
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  // 
  const [{ user , token },dispatch] = useDataLayerValue();
  // run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clear the token from url for security reason
    window.location.hash = "";
    // _token = temp token naming convention followed in companies
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })
      // sending the token to the spotify api => it like showing the pass to the spotify that i am authorized
      spotify.setAccessToken(_token);
      spotify.getMe().then(usr => {
        dispatch({
          type:"SET_USER",
          user:usr,
        })
      })
    }
  }, [])
  return (
    // BEM convention used for css
    <div className="app">
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
