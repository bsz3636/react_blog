import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({action, actionText, ...props}) => {

  const [ title, setTitle ] = useState(props.title || '');
  const [ shortDescription, setShortDescription ] = useState(props.shortDescription || '');
  const [ content, setContent ] = useState(props.content || '');
  const [ publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
  const [ author, setAuthor] = useState(props.author || '');

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
    action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)} className="mt-4">

      <Form.Group className="mb-3 col-6" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          {...register("title", { required: true, minLength: 4 })}
          type="text"
          placeholder="Enter title"
          value= {title}
          onChange={e => setTitle(e.target.value)}
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 4)</small>}
      </Form.Group>
    
      <Form.Group className="mb-3 col-6" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          {...register("author", { required: true, minLength: 4 })}
          type="text"
          placeholder="Enter author"
          value= {author}
          onChange={e => setAuthor(e.target.value)}
        />
        {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 4)</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-6" controlId="formPublishedDate">
        <Form.Label>Published Date</Form.Label>
        <DatePicker selected={publishedDate} 
                    onChange={(date) => setPublishedDate(date)}
        />
        {dateError && <small className="d-block form-text text-danger mt-2">Published Date can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register("shortDescription", { required: true, minLength: 20 })}
          type="text"
          as="textarea"
          placeholder="Leave a comment here" 
          rows={4}
          value= {shortDescription}
          onChange={e => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Short description is too short (min is 20)</small>}
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          theme='snow'
          value={content}
          onChange={setContent}
        />  
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>  

      <Button variant="primary" type="submit">Add post</Button>

    </Form>
  )
}

export default PostForm;