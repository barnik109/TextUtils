import React,{useState} from 'react'

const TextForm = (props) => {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
  }
  const handleLoClick=()=>{
    console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success")
  }
  const handleClClick=()=>{
    let newText='';
    setText(newText)
  }

  const handleCopy =() =>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces=() =>{
      var newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
  }

  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
    const [text,setText]=useState("");
     return (
      <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Example textarea</label>
  <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowCase</button>
<button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes read</p>
</div>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
</div>
</>
  )
}

export default TextForm