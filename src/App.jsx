import { useState } from 'react';

import { marked } from 'marked'; // converts markdown string into HTML string
import DOMPurify from 'dompurify'; // sanitizes the HTML string
import parse from 'html-react-parser'; // converts HTML string to react element

import './App.css';

function App() {
  const [editorText, setEditorText] = useState('## Hello World');

  const handleEditorTextChange = (event) => {
    setEditorText(event.target.value);
  };

  marked.setOptions({
    breaks: true,
  });

  return (
    <div id="container">
      <h1>Markdown Previewer</h1>
      <div id="main-section">
        <div id="editor-section">
          <h2>Editor</h2>
          <form>
            <textarea
              name="editor"
              id="editor"
              value={editorText}
              onChange={handleEditorTextChange}
            ></textarea>
          </form>
        </div>
        <div id="preview-section">
          <h2>Preview</h2>
          <div id="preview">
            {parse(DOMPurify.sanitize(marked.parse(editorText)))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
