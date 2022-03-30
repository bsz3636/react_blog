import {getFiltredCategory} from '../../../redux/postsRedux';
import { useParams} from 'react-router';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import PostCard from '../../views/PostCard/PostCard';


const CategoryPosts = () => {

  const { name } = useParams();
  
  const posts = useSelector(state => getFiltredCategory(state, name));
  console.log('posts',posts);

  if(posts.length === 0) 
 
  return (
    <Container>
      <h2 className="mb-5 "><span>Category: </span>{name}</h2>
      <p>No posts in this category ...</p>
    </Container>
    
  )

  else return (
    <Container>
      <h2 className="mb-5 "><span>Category: </span>{name}</h2>
      <Row>
      {
        posts.map(post => (
          <Col key={post.id} className="mb-3 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 d-block d- align-items-stretch">
            <PostCard id={post.id}/>
          </Col>
        ))
      }
      </Row>
    </Container>
  )
}

export default CategoryPosts;