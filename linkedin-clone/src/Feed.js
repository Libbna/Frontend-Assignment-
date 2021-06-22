import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import React, {useEffect, useState} from 'react'
import "./feed.css"
import { db } from './firebase';
import firebase from 'firebase';
import InputOptions from './InputOptions';
import Posts from './Posts';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";



const Feed = () => {

    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
      db.collection("posts")
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => (
          setPosts(snapshot.docs.map(doc => (
              {
                  id: doc.id,
                  data:doc.data(),
              }
          )))
      ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
    

    db.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl ||'',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");

    };
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type ="text" placeholder="Start a post"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
            {posts.map(({ id, data: {name, description, message, photoUrl}}) => (
                <Posts 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
          </FlipMove>

        </div>
    )
}

export default Feed
