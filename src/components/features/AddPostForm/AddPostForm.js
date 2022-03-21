import {addPost} from '../../../redux/postsRedux';
import { Form,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ title, setTitle ] = useState('');
  const [ shortDescription, setShortDescription ] = useState('');
  const [ content, setContent ] = useState('');
  const [ publishedDate, setPublishedDate ] = useState('');
  const [ author, setAuthor] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost ({ title, shortDescription, content, publishedDate, author}));
   
    setTitle('');
    setShortDescription('');
    setContent('');
    setPublishedDate('');
    setAuthor('');
    navigate("/", { replace: true })
  }

  return (
    <Form onSubmit={handleSubmit}>

    </Form>
  )
}

export default AddPostForm;