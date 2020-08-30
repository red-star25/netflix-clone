import React from 'react';
import './App.css';
import Row from "./Row"
import request from "./request"
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
    {/*Nav */}
    <Nav/>
    {/*Banner */}
    <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetFlixOriginals} isLargeRow></Row>
     <Row title="Trending Now" fetchUrl={request.fetchTrending}></Row>
     <Row title="Top Rated" fetchUrl={request.fetchTopRated}></Row>
     <Row title="Action Movies" fetchUrl={request.fetchActionMovies}></Row>
     <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}></Row>
     <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}></Row>
     <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}></Row>
     <Row title="Documentries" fetchUrl={request.fetchDocumentries}></Row>

    </div>
  );
}

export default App;
