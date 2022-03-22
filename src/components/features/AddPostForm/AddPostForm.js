
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
    <Form onSubmit={handleSubmit} className="mt-4">
    
      <Form.Group className="mb-3 col-6" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"
                      placeholder="Enter title"
                      value= {title}
                      onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>
    
      <Form.Group className="mb-3 col-6" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text"
                      placeholder="Enter author"
                      value= {author}
                      onChange={e => setAuthor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formPublishedDate">
        <Form.Label>Published Date</Form.Label>
        <Form.Control type="text"
                      placeholder="Enter data dd-mm-yyyy"
                      value= {publishedDate}
                      onChange={e => setPublishedDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control type="text"
                      as="textarea"
                      placeholder="Leave a comment here" 
                      rows={4}
                      value= {shortDescription}
                      onChange={e => setShortDescription(e.target.value)}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control type="text"
                      as="textarea"
                      placeholder="Leave a comment here"
                      rows={8}
                      value= {content}
                      onChange={e => setContent(e.target.value)}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">Add post</Button>

    </Form>
  )
}

export default AddPostForm;