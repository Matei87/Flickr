import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';
import Pagination from './components/Pagination/Pagination';
import Footer from './components/Footer/Footer';
import axios from 'axios';


const App = () => {
  const [picture, setPicture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [startPage, setStartPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [endPage] = useState(60);
  const [inputValue, setInputValue] = useState('');

  const formOnSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.name.value);
  }

  useEffect(() => {
    const getValue = async () => {
      try {
        if (inputValue === '') {
          setInputValue('birde')
        } else {
          setLoading(true);
          let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${inputValue}&page=${startPage}&per_page=${endPage}&format=json&nojsoncallback=1`;
          const res = await axios.get(url);
          setTotalPages(res.data.photos.pages);
          setPicture(res.data.photos);
          setLoading(false);
        }
      } catch (e) {
        setError(e);
      }
    }
    getValue();
  }, [inputValue])

  // //Set next page
  const nextPage = async (pageNumber) => {
    try {
      setLoading(true);
      let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${inputValue}&page=${pageNumber}&per_page=${endPage}&format=json&nojsoncallback=1`;
      const res = await axios.get(url);
      setPicture(res.data.photos);
      setStartPage(pageNumber);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  }

  let pic = [];
  for (let value in picture.photo) {
    pic.push(picture.photo[value])
  }
  let pictureUrls = [];
  pic.map(element => {
    pictureUrls.push(`http://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`);
  });


  return (
    <>
      <Navbar />
      <Search
        formOnSubmit={formOnSubmit}
      />
      {totalPages > 0 ? <Pagination totalPages={totalPages} startPage={startPage} nextPage={nextPage} /> : ""}
      <Posts
        loading={loading}
        pictureUrls={pictureUrls}
      />
      {totalPages > 0 ? <Pagination totalPages={totalPages} startPage={startPage} nextPage={nextPage} /> : ""}
      <Footer />
    </>
  );

}

export default App;
