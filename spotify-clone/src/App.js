
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
// npm i spotify-web-api-js  =>to access spotify web api 
import SpotifyWebApi from 'spotify-web-api-js';

// creating a new instace of spotify web api
const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  // run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clear the token from url for security reason
    window.location.hash = "";
    // _token = temp token naming convention followed in companies
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      // sending the token to the spotify api => it like showing the pass to the spotify that i am authorized
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log("inside the spotify getme fuxn", user)
      })
    }
  }, [])

  return (
    // BEM convention used for css
    <div className="app">
      {token ? <h1>hi i am logged in</h1> : <Login />}
    </div>
  );
}

export default App;
