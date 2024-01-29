import classes from './NewPost.module.css';
import { useState } from 'react';
function NewPost({ onCancle }) {
  const [enteredBody, setEnteredBody] = useState(''); // PostList 컴포넌트에서 가져옴, 그 이유는 onSubmit 이벤트가 실행될 때 함수가 필요함. 여기서 실행할 함수를 입력값을 수집하는 곳에 함께 둠
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onCancle();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancle}>
          Cancle
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
