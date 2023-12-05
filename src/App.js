import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Userfront from "@userfront/toolkit/react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import SinglePage from "./components/pages/SinglePage";
import NotFound from "./components/pages/NotFound";
import {
  Auth,
  Dashboard,
  Login,
  RequireAuth,
} from "./components/pages/authPage/Auth";

// https://userfront.com/test/dashboard

export const AppContext = createContext();

//  "8f1037d18f9f4c4a87e327145ecabe73"
// const API_KEY1 = "aec84a15a60b4c3494eccce8ccfb3dfb";
// const API_URL1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
// let API_KEY2 = "9f64b333b8335a1145b70d8badec6724";
// let API_URL2 = `https://gnews.io/api/v4/top-headlines?lang=en`;
let API_URL3 = `https://64ea6d75bf99bdcc8e678e48.mockapi.io/news`;

Userfront.init("wbmpgx9n"); // авторизация через userfront

function App() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    // if (category) {
    //   API_URL += `&topic=${category}`;
    // }
    // if (search) {
    //   API_URL += `&q=${search}`;
    // }
    // API_URL += `&token=${API_KEY}`;  // для работы с новостными API, не с MOCKAPI

    if (category) {
      API_URL3 = `https://64ea6d75bf99bdcc8e678e48.mockapi.io/news?category=${category}`;
    }

    fetch(API_URL3)
      .then((res) => res.json())
      // .then((data) => setNews(data.articles)) // для новостного апи
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
    setLoading(false);
  }, [category, search]);

  const handleCategory = (category) => {
    setCategory(category);
    setSearch("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setCategory(""); // работает с новостным API, не с MOCKAPI
  };

  const handleNewArticleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, description };

    axios //добавляем статьи с автогенерацией картинки
      .post(API_URL3, newArticle)
      .then(() => {
        setDescription("");
        setTitle("");
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteArticle = (id) => {
    axios
      .delete(API_URL3 + "/" + id)
      .then((res) => console.log(res))
      .then((err) => console.error(err));
  };

  return (
    <>
      <AppContext.Provider
        value={{
          category,
          search,
          loading,
          news,
          title,
          description,
          setTitle,
          setDescription,
          handleCategory,
          handleSearch,
          handleNewArticleSubmit,
          handleDeleteArticle,
        }}
      >
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news/:id" element={<SinglePage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
