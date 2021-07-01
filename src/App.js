import { useRef, useState } from "react";
// core
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
// import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/react-editor';

import { items, toggleFullScreen, previewStyleButton, darkMode } from "./toolbarItems";

import widgetRules from "./widgetRules";
import toolbarItems from "./toolbarItems";

const previewStyle = "vertical";

export default function App() {
  const editorRef = useRef(null);
  const [previewStyle, setPreviewStyle] = useState("vertical");
  const [theme, setTheme] = useState("dark");
  let darkModeOn = false;
  let previewStyleTab = false;

  const toggleDarkMode=()=>{
    // setTheme(darkModeOn?"light":"dark");
    // darkModeOn = !darkModeOn;
    // console.log(editorRef.current.getRootElement().getElementsByClassName("toastui-editor-defaultUI")[0])
    let el = document.getElementsByClassName("toastui-editor-defaultUI")[0];
    if(el.classList.contains("toastui-editor-dark"))
      el.classList.remove("toastui-editor-dark");
    else el.classList.add("toastui-editor-dark");
  }

  const togglePreviewStyle=()=>{
    setPreviewStyle(previewStyleTab?"vertical":"tab");
    previewStyleTab = !previewStyleTab;
  }
  return <Editor
    ref={editorRef}
    initialValue="# hello react editor world!"
    previewStyle={previewStyle}
    height="400px"
    initialEditType="markdown"
    useCommandShortcut={true}
    theme={theme}
    widgetRules={widgetRules}

    toolbarItems={[
      ...items, [{
        el: toggleFullScreen(editorRef),
        tooltip: 'Toggle Full Screen'
      }, {
        el: previewStyleButton(togglePreviewStyle),
        tooltip: "Preview Style"
      }, {
        el: darkMode(toggleDarkMode),
        tooltip: "Preview Style"
      }],
      ['scrollSync']
    ]}

    customHTMLRenderer={{
      latex(node) {
        console.log(node)
      },
      btex(node) {
        console.log(node)
      }
    }}
  />
}