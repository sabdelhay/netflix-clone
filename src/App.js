import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';


function App() {
  return (
    <div className="app">
      {/* Nav */}
      
      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row title="Netfilx Originals" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedynMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
