import { Editor } from "./Md";

export default function EditCurrent() {
    return "Hello"
  return (
    <Editor
      theme="light"
      getMd={(md) => {
        localStorage.md = md;
      }}

      // initialize this at first
      initialValue={localStorage.md}
    />
  );
}
