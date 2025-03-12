// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDcxZTcyNGU2MWUyNzVlODQ2ZWJmNDhmZDc4MjE5NSIsIm5iZiI6MTc0MTU5MDk5OC4xNjgsInN1YiI6IjY3Y2U5MWQ2ZDk1ZTQxMWRkMDJhNjVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JqTUxcaajiPWMvGWY3_0B-_IxCH1Aiza1v4srJ5HduA'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

export const TMDB_Config = {
    BASE_URL : "https://api.themoviedb.org/3",
    API_KEY : process.env.EXPO_TMDB_API_KEY,
    headers : {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_TMDB_API_KEY}`
    }
}
export const fetchMovies = async ({query} : {query: string})=>{
    const endpoint = query ? `${TMDB_Config.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
    `${TMDB_Config.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_Config.headers
    });
    if(!response.ok){
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
}