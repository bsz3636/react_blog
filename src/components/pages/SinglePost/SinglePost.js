import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById} from '../../../redux/postsRedux';
import { Container,Button, Col, Row, Modal } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import {removePost} from '../../../redux/postsRedux'


const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));
  console.log('post: ', postData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  
  const remove = () => {
    dispatch( removePost (postData.id))
  };

  if(!postData) return <Navigate to="/" />
    else return (
      <>
      <article>
        <Container className="w-50 my-5 ">
          <Row >
            <Col className="col-8">
              <h3 className="mb-3 ">{postData.title}</h3>
              <h5> <span>Author: </span>{postData.author}</h5>
              <h5> <span>Published: </span>{postData.publishedDate}</h5>
              <p className="mt-3 ">{postData.content}</p>
            </Col>
            <Col className=" col-4">
              <Link  to={'/post/edit/'+ postData.id} key={postData.id}>
                <Button className=" mx-2"variant="outline-info">Edit</Button>
              </Link>
              <Button variant="outline-danger" onClick={handleShow}>Delate</Button>
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
          <p>This operation will completely remove this post from the App. Are you sure you want to do that?</p>
        </Modal.Body>
    
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" onClick={function(e){ handleClose(); remove()}}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </article>
    </>
    )
  }
    
  export default SinglePost;