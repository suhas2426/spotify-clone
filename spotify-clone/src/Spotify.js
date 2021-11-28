// here we are using the spotify api for this project
// 1st we will send the user to spotify for authorization when he clicks on the login button as soon as the user is authorized we are redirecting the user to home page of our app.

// end point from spotify to authorize users
export const authEndPoint = "https://accounts.spotify.com/authorize";

// the url which i need to redirect after authorization
const redirectUri = "http://localhost:3000/";

// as soon as we login into spotify developer we will get the client id
const clientId = "ad2376e8cab345bb9fc9b9ac14f52081";

//here we are mentioning the scopes of the user means what are all the funtions user can perform. 
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// using all of the above we will create a login uri
// backticks = string interpolation => we use for js+strings opreations
// scopes.join("%20") = it joins all the strings inside the arrray
// response_type=token => tell that i need token as response =>token is like a pass given to user to proceed 
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
// http://localhost:3000/#access_token=BQBQFvGImQoQMyJalCiVmkEaYDVSpET-rRP1F8d_EdYNc_MatTSgEGCCicRAxLsxSsQLw3SDlajV8EMQRuxorFr34A3fn09DRNSwywgtGsNDT7YfXiNGygOiI26ucVRXB6bq76y0hWzUh_uI7a_rd-DumxjhS4suJa06x3XAjF8eAZLGfk0p&token_type=Bearer&expires_in=3600
// we need to filter the token that we are getting from the above url(after redirection)
// the below funtionality is to pull the access token
export const getTokenFromUrl = () => {
    // find the location of hash
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        var parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
    
} 