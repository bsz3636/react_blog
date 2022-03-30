import PostForm from '../PostForm/PostForm';
import {getPostById, editPost} from '../../../redux/postsRedux';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = post => {
    dispatch(editPost ({ ...post, id}));
    navigate('/')
  }

  if (!postData) return <Navigate to ="/" />
  return (
    <PostForm action={handleSubmit} 
              actionText={'Edit post'}
              title={postData.title}
              author={postData.author}
              publishedDate={postData.publishedDate}
              category={postData.category}
              shortDescription={postData.shortDescription}
              content={postData.content}
    />
  )
}

export default EditPostForm;