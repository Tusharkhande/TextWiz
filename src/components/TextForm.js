
import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");

    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const[text, setText] = useState('');
    //text = "new text"   wrong
    // setText("New text")     right way
    return (
        <>
        <div className='container' style={{color: props.mode==="light" ? "black" : "white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light' ? 'white' : 'grey' , color: props.mode==="light" ? "black" : "white"}} onChange={handleOnChange} id="mybox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="light" ? "black" : "white"}}>
            <h2>Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length> 0 ? text : "Enter Something above to preview"} </p>
        </div>
        </>
        
    )
}
