import React, { useEffect ,useState} from "react";
import { Viewer } from "./Md";

export default function ViewerDark() {
    const [md, setMd] = useState(null);
  useEffect(() => {
    const el = document.body;
    el.style.backgroundColor = "#121212";

    setMd(localStorage.md)
    return () => {
      el.style.backgroundColor = "white";
    };
  }, []);
  // cur
  return md?<Viewer
      md={md}
    />:<h1>Loading...</h1>
}
