import { Card, ListGroup, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoryRedux';

const Categories = () => {

  const categories = useSelector (state => getAllCategories (state));
  console.log('categories',categories)

    return (
      <Container className="w-50 my-5 ">
        <h2 className="mb-4 "> All categories</h2>
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            {
              categories.map(category => (
                <ListGroup.Item key={category.id} action> <Link className="mt-auto " to={ "/categories/" + category.name} >{category.name}</Link>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Card>
      </Container>
    )
  }
    
  export default Categories;