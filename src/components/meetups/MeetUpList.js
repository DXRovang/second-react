import classes from "./MeetUpList.module.css";
import MeetUpItem from "./MeetUpItem";

function MeetUpList(props) {
  return (
    <div>
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <MeetUpItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            description={meetup.description}
          />
        ))}
      </ul>
    </div>
  );
}
export default MeetUpList;
