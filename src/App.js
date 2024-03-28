import logo from './logo.svg';
import './App.css';

function App() {
    return  <main className="container mt-5">
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="col-lg-12 px-0">
                        <h1 className="fst-italic">Welcome to Word Application....</h1>
                        <p className="lead my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-8">
                        <form>
                        <div className="form-group">
                            <label className="mb-2">Type or Paste your text here to change text case</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div className="mt-3">                         
                            <button type="button" className='btn btn-secondary me-3'>To lowercase</button>
                            <button type="button" className='btn btn-secondary me-3'>To UPPERCASE</button>
                            <button type="button" className='btn btn-secondary me-3'>To Capitalise</button>
                            <button type="button" className='btn btn-secondary me-3'>To <i>Italic</i></button>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-4"><h5>Preview</h5></div>
                </div>
            </main>
}

export default App;
