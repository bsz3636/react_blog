import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import Categories from './components/pages/Categories/Categories';
import CategoryPosts from './components/pages/Categories/CategoryPosts';
import About from './components/pages/About/About';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import SinglePost from './components/pages/SinglePost/SinglePost';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';


const App = () => {
  
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:id" element={<SinglePost/>} />
        <Route path="/post/add" element={<AddPost/>} />
        <Route path="/post/edit/:id" element={<EditPost/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/categories/:name" element={<CategoryPosts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
