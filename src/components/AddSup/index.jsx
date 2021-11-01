import { useState } from "react";
import { Input } from "../Input";
import { usePostPosts } from "../../hooks/usePost";



export const ADDSUP = (props) => {
  const [title, setSups] = useState("Plz enter body");
  const post = usePostPosts()


  const handlesub = () => {
    props.addsup({ title });

    const body = {
      title: title,
      body: 'My body of post',
      userId: 1,
      id: 101
    }
    post({ body }).then(console.log(body));
  };
  return (

    <div className="p-3 m-2">
      {/* <h1>ADD Your Own Post</h1> */}
      <Input value={title} setValue={setSups} label="Title of Post" /> <br />
      <button onClick={handlesub} className="btn btn-primary">Add Post</button>

    </div>

  );
}


///////////////////////
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
