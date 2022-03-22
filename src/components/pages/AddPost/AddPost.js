import styles from './AddPost.module.scss';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const AddPost = () => {
  return (
    <section className={styles.add}>
    <h2> AddPost</h2>
    <AddPostForm/>
    </section>
  )
}
    
export default AddPost;