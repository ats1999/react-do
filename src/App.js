import { useRef, useState } from "react";
import Md from "mde10";
import './App.css';
const initialValue = [
  "# Post Title Goes Here",
  "Post Description Goes Here",
  "## Note",
  "> First heading will be used as title of the post",
  "> First paragraph will be used as description of the  post",
  "## Table of content",
  "***",
  "## Main",
  "***",
  "## References",
  "***",
  "Thanku Note!"
]
export default function App() {
 return <Md/>
}
