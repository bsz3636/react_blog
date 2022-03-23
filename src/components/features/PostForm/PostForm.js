import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = ({action, actionText, ...props}) => {

  const [ title, setTitle ] = useState(props.title || '');
  const [ shortDescription, setShortDescription ] = useState(props.shortDescription || '');
  const [ content, setContent ] = useState(props.content || '');
  const [ publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
  const [ author, setAuthor] = useState(props.author || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

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

export default PostForm;