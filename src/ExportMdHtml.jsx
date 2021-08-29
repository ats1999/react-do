import React,{useState,useEffect} from "react";

import { Editor } from "./Md";

export default function EditorLight() {
    const [exportItem, setExportItem] = useState(null);
    const [text, setText] = useState("");
    useEffect(() => {
        console.log(exportItem)
        if(exportItem == "md"){
            setText(localStorage.md);
        }else if(exportItem == "html"){
            setText(localStorage.html);
        }
    }, [exportItem]);

  return (
    <div>
      <Editor
        theme="light"
        getMd={(md) => (localStorage.md = md)}
        getHTML={(html) => (localStorage.html = html)}
      />

      <div style={{ margin: "50px" }}></div>

      <button
        style={{
          display: "inline",
          margin: "10px",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
        }}
        onClick={() => setExportItem("md")}
      >
        Export Markdown
      </button>

      <button
        style={{
          display: "inline",
          margin: "10px",
          backgroundColor: "gray",
          color: "white",
          padding: "10px",
        }}
        onClick={() => setExportItem("html")}
      >
        Export HTML
      </button>
      <div style={{ margin: "50px" }}></div>
      <textarea style={{
          width:"100%",
          height:"400px"
      }} value={text}></textarea>
    </div>
  );
}
