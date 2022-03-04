import { useState } from "react";
import axios from "axios";

export default function Write({user}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const reqData = {
      title,
      description,
      text: text.replace(/\n/g, "<br />"),
      user
    };
    axios
      .post("/api/create-article", reqData)
      .then(res =>  {
        swal("Article Submitted", "", "success");
        location.href="/";
      })
      .catch(err => {
        return swal("Sorry", `Article name is not unique`, "error");
      });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="title">
        <h5 style={{ color: "#cc2b5e", fontWeight: "bold" }}>Title</h5>
      </label>
      <input
        className="browser-default"
        style={{
          height: "100%",
          width: "100%",
          padding: "10px",
          border: "2px #eee solid",
          borderRadius: "8px",
          color: "#33539E"
        }}
        required
        id="title"
        type="text"
        placeholder="Give a suitable title ..."
        onChange={e=>setTitle(e.target.value.trim())}
      />
      <label style={{ marginTop: "1em" }} htmlFor="description">
        <h5 style={{ color: "#cc2b5e", fontWeight: "bold" }}>Description</h5>
      </label>
      <input
        className="browser-default"
        style={{
          height: "100%",
          width: "100%",
          padding: "10px",
          border: "2px #eee solid",
          borderRadius: "8px",
          color: "#33539E"
        }}
        required
        id="description"
        type="text"
        placeholder="Write a suitable description in one or two sentences ..."
        onChange={e=>setDescription(e.target.value.trim())}
      />
      <label style={{ marginTop: "1em" }} htmlFor="article">
        <h5 style={{ color: "#cc2b5e", fontWeight: "bold" }}>Article</h5>
      </label>
      <textarea
        rows="10"
        className="browser-default"
        style={{
          height: "100%",
          width: "100%",
          padding: "10px",
          border: "2px #eee solid",
          borderRadius: "8px",
          color: "#33539E",
          backgroundColor: "white"
        }}
        required
        id="article"
        placeholder="Write the Article Body ..."
        onChange={e=>setText(e.target.value.trim())}
      />
      <button style={{ marginTop: "1em", borderRadius: "8px", backgroundColor: "#47CACC", color: "white", border: "none", fontWeight: "bold" }} type="submit">
        Submit
      </button>
    </form>
  );
}
