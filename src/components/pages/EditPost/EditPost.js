import styles from '../AddPost/AddPost.module.scss';
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const EditPost = () => {
    return (
      <section className={styles.form}>
        <h2> EditPost</h2>
        <EditPostForm/>
      </section>
    )
  }
    
  export default EditPost;