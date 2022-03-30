import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Container,Button, Col, Row } from "react-bootstrap";
import PostCard from '../../views/PostCard/PostCard';

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
            post => 
              <Col className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-block d- align-items-stretch" key={post.id}>
                <PostCard id={post.id}/>
              </Col>
          )
        }
      </Row>
      </Container>
    </section>
  )
}
    
  export default Post;