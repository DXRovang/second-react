import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpPage() {
  function addMeetUpHandler(meetUpData) {
    fetch("https://something.com", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // then().
    // then();
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
}
export default NewMeetUpPage;
