import { useState } from 'react';
import './App.css';

function App() {
    const [newText, setNewText] = useState('');
    const [text, setText] = useState('');

    const handleSentenceCase = (event) => {
        let sentences = text.split('.'); 
        let result = sentences.map(sentence => {
            sentence = sentence.trim();
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        });
        setNewText(result.join('. '));
    }

    const assignNewText = (event) => {
        setText(event.target.value);
    }

    const handleToLowercase = () => {
        setNewText(text.toLowerCase());
    }

    const handleToUppercase = () => {
        setNewText(text.toUpperCase());
    }

    const handleToCapitalise = () => {
        let newText = text.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });

        setNewText(newText);
    }

    const handleRemoveAllSpaces = () => {
        setNewText(text.replace(/\s+/g, ''));
    }

    const handleToItalic = () => {
        setNewText('<i>' + text + '</i>');
    }

    return (
        <main className="container mt-5">
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                <div className="col-lg-12 px-0">
                    <h1 className="fst-italic">Welcome to Word Application....</h1>
                    <p className="lead my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <form>
                    <div className="form-group">
                        <label className="mb-2">Type or Paste your text here to change text case</label>
                        <textarea className="form-control" value={text} id="text" rows="5" onChange={assignNewText}></textarea>
                    </div>
                    <div className="mt-3">                         
                    <button disabled={text.length===0} type="button" className='btn btn-secondary me-3 my-2' onClick={handleSentenceCase}>Sentence Case</button>
                        <button disabled={text.length===0} type="button" className='btn btn-secondary me-3 my-2' onClick={handleToLowercase}>To lowercase</button>
                        <button disabled={text.length===0} type="button" className='btn btn-secondary me-3 my-2' onClick={handleToUppercase}>To UPPERCASE</button>
                        <button disabled={text.length===0} type="button" className='btn btn-secondary me-3 my-2' onClick={handleToCapitalise}>To Capitalise</button>
                        <button disabled={text.length===0} type="button" className='btn btn-secondary me-3 my-2' onClick={handleRemoveAllSpaces}>Remove All Spaces</button>
                        <button disabled={text.length===0} type="button" className='btn btn-secondary me-3 my-2' onClick={handleToItalic}>To <i>Italic</i></button>
                    </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <h5>Preview</h5>
                    <div className="preview" dangerouslySetInnerHTML={{ __html: newText }}></div>
                </div>
            </div>
        </main>
    );
}

export default App;
