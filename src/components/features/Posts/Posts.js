import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Container,Button, Card, Col, Row } from "react-bootstrap"

const Post = () => {
  
  const posts = useSelector(state => getAllPosts(state));

  return (
    <section>
      <div className="my-4 d-flex justify-content-between">
        <h2>All posts</h2>
        <Link className="align-bottom" to="/post/add">
          <Button variant="outline-info">Add post</Button>
        </Link>
      </div>
      <Container className="mb-5 ">
      <Row>
        {
          posts.map( 
            post => <Col className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-block d-flex" key={post.id}>
                <Card >
                  <Card.Body>
                    <Card.Title className="display-7 fw-bold mb-3">{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 ">
                      <span className="fw-bold">Author: </span>{post.author}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 ">
                      <span className="fw-bold">Published: </span>{post.publishedDate}
                    </Card.Subtitle>
                    <Card.Text>
                    {post.shortDescription}
                    </Card.Text>
                    <Link  to="/post/:id" key={post.id}>
                      <Button variant="primary">Read more</Button>
                    </Link>
                  </Card.Body>
                </Card> 
              </Col>
          )
        }
      </Row>
      </Container>
    </section>
  )
}
    
  export default Post;