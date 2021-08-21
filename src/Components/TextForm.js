import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState(" ");

    const textInput=(event)=>{
        // this is how we handle onChange event
        setText(event.target.value);
    }

    const toUpper=()=>{
        // .toUpperCase() is a default function given in JS
        // we set the text to it's upper case
        setText(text.toUpperCase());
        // alert
        props.displayAlert("Text converted to upper case", "success");
    }

    const toLower=()=>{
        // .toLowerCase() is a default function given in JS
        setText(text.toLowerCase());
        // alert
        props.displayAlert("Text converted to lower case", "success");
    }

    const toClear=()=>{
        setText(" ");        
        // alert
        props.displayAlert("Text Removed", "warning");
    }

    const copyText=()=>{
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        // alert
        props.displayAlert("Text copied to clipboard", "success");
    }

    const removeExtraSpace=()=>{
        const newString = text.replace(/\s+/g,' ').trim();
        setText(newString);
    }

    return (
        <>
            <div className="container">
                <br></br>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="7" value={text} onChange={textInput} style={{backgroundColor:props.mode==='dark' ? '#3b3b3b' : 'white', color:props.mode==='dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button type="button" className="btn btn-secondary mx-1" onClick={toUpper}>Change to Upper Case</button>
                <button type="button" className="btn btn-secondary mx-1"  onClick={toLower}>Change to Lower Case</button>
                <button type="button" className="btn btn-secondary mx-1"  onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-secondary mx-1"  onClick={removeExtraSpace}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-danger mx-1"  onClick={toClear}>Clear text area</button>
            </div>
            <div className="container">
                <br></br>
                <h2>Text Summary</h2> 
                <h4>You typed {text.split(" ").length - 2} Words and {text.length-1} characters!</h4>
                <br></br>
                <h4>Text Preview</h4>
                <h6>{text}</h6>
            </div>
        </>

        
    )
}
