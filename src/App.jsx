import './App.css';

function App() {
  return (
    <div id="container">
      <h1>Markdown Previewer</h1>
      <div id="main-section">
        <div id="editor-section">
          <h2>Editor</h2>
          <form>
            <textarea name="editor" id="editor"></textarea>
          </form>
        </div>
        <div id="preview-section">
          <h2>Preview</h2>
          <div id="preview"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
