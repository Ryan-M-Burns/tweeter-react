import React from 'react';

const TweetForm = () => {
  const tweetPlaceholder = "What are you humming about?";
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={e => e.preventDefault()}>
        <textarea className="form__textarea" name="text" placeholder={tweetPlaceholder}></textarea>
        <input type="submit" value="Tweet" className="form__input" onClick={e => e.preventDefault()}/>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
};

export default TweetForm;