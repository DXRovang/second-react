import MeetUpList from "../components/meetups/MeetUpList";
import { useState, useEffect } from "react";
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  useEffect(()=>{
    setIsLoading(true);
    fetch("https://something.com")
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      const meetups = [];
      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);
  


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All meetups</h1>
      <ul>
        <MeetUpList meetups={loadedMeetups} />
        {/* {DUMMY_DATA.map((data) => (
          <li key={data.id}>{data.description}</li>
        ))} */}
      </ul>
    </div>
  );
}
export default AllMeetUpsPage;

//NOTE data =>  { why is this in curly?  why another return}
