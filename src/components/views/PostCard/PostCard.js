import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { Button, Card} from "react-bootstrap";
import { dateToStr} from '../../../utils/dateToStr';

const PostCard = ({id}) => {

  const post = useSelector(state => getPostById(state, id));

  return (
    <Card >
      <Card.Body>
        <Card.Title className="display-7 fw-bold mb-3">{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 ">
          <span className="fw-bold">Author: </span>{post.author}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 ">
          <span className="fw-bold">Published: </span>{dateToStr(post.publishedDate)}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 ">
          <span className="fw-bold">Category: </span>{post.category}
        </Card.Subtitle>
        <Card.Text>
          {post.shortDescription}
        </Card.Text>
        <Link  to={"/post/" + post.id} key={post.id}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card> 
      
  )
}
    
  export default PostCard;