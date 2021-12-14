import { useRef } from "react";

function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };
    props.onAddMeetUp(meetupData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">MeetUpTitle</label>
      <input type="text" required id="title" ref={titleInputRef} />
      <label htmlFor="image">MeetUpImage</label>
      <input type="url" required id="image" ref={imageInputRef} />
      <label htmlFor="description">description</label>
      <textarea
        required
        id="description"
        rows="5"
        ref={descriptionInputRef}
      ></textarea>
      <button>Add Meetup</button>
    </form>
  );
}
export default NewMeetUpForm;

// refs  : new concept for me
// was going to use useState
