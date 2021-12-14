import MeetUpList from '../components/meetups/MeetUpList'

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetUpsPage() {
  return (
    <div>
      <h1>All meetups</h1>
      <ul>
        <MeetUpList meetups={DUMMY_DATA}/>
        {/* {DUMMY_DATA.map((data) => (
          <li key={data.id}>{data.description}</li>
        ))} */}
      </ul>
    </div>
  );
}
export default AllMeetUpsPage;

//NOTE data =>  { why is this in curly?  why another return}
