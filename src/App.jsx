import { useState } from 'react';

import { marked } from 'marked'; // converts markdown string into HTML string
import DOMPurify from 'dompurify'; // sanitizes the HTML string
import parse from 'html-react-parser'; // converts HTML string to react element

import './App.css';
import reactLogo from './assets/react.svg';

function App() {
  const initialText = `
# Header
## Sub header
Link to my [github](https://github.com/shwetakanekar) account

Here is some inline code, \`<div>Hello World</div>\`

And a block of code,
\`\`\`
// this is multi-line code:

function greet(name) {
  return 'Hello' + name;
}

greet('John');
\`\`\`

Here is a **list**:
- List item 1
- List item 2
- List item 3

Block quote
> This is a Block Quotes.

This project is built using ![React](${reactLogo} "React")
`;

  const [editorText, setEditorText] = useState(initialText);
  // a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
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
