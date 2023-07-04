import React, { useState } from "react";

export default function TextBuilder(props) {
  
  const [stylePreview] = useState(
    {
    weight: "100%",
    height: "100px"
    }
  );

  const handupclick = () => {
    // console.log("clicked handupclick " + mytext );
    let newText = mytext.toUpperCase();
    setText(newText);
    props.showAlert("text has been converted uppercase", "success")
  };
  const handleloClick = () => {
    // console.log("clicked handlowerclick " + mytext );
    let newText = mytext.toLowerCase();
    setText(newText);
    props.showAlert("text has been Converted LowerCase", "success")
  };

  // UpperCase Button Function

  // const Capitalize = () => {
  //   const mytext = newText.toLowerCase();
  //   return mytext.chartAt(0).toUpperCase() = newText.slice(1);
  // }
  
  const handleClearClick = () => {
    // console.log("clicked handclearclick " + mytext );
    let newText = "";
    setText(newText);
    props.showAlert("text has been cleared", "success")
  };
  const handleCopy = () => {
    let text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("your text has been Copyed", "success")
  };
  const handleExtraSpaces = () => {
    let newText = mytext.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces", "success")
  };

  const handtype = (event) => {
    // console.log("clicked handtype");
    setText(event.target.value);
  };
  

  const [mytext, setText] = useState("");

  return (
    
      <div className="container">
        <div className="container" style={{color: props.black==='light'?'black':'#042743'}}>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.headline}</h1>
        
        <div className="input-group">
          <span className="input-group-text">Try Unitext -<br></br> Type Your Text Here</span>
          <textarea
            className="form-control"
            value={mytext}
            onChange={handtype} 
            style={{backgroundColor: props.mode==='light'?'#bdb9b9':'#322d2d', color: props.mode==='light'?'black':'white', cursor: 'text'}}
            id="textbox"
            aria-label="With textarea"
            rows={8}
          ></textarea>
        </div>

        <button className="btn-1 btn-primary" onClick={handupclick} disabled={mytext.length===0} >
          Convert to Uppercase
        </button>
        <button className="btn-1 btn-primary" onClick={handleloClick} disabled={mytext.length===0}>
          Convert to lowercase
        </button>

        {/* This Uppercase Button is Temporery Close */}
        {/* <button className="btn-m btn-primary" onClick={Capitalize}> */}
         {/* Uppercase First Word
        </button> */}


        <button className="btn-1 btn-primary" onClick={handleClearClick} disabled={mytext.length===0}>
          Clear Text
        </button>

        <button className="btn-1 btn-primary" onClick={handleCopy} disabled={mytext.length===0}>
          Copy Text
        </button>
        <button className="btn-1 btn-primary" onClick={handleExtraSpaces} disabled={mytext.length===0}>
          Remove-ExtraSpaces
        </button>
      </div>
      <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className="sum-text" style={{color:props.mode==='light'?'black':'white'}}>Your Text Summary</h1>
        <p>
          <b>Word Count: </b>
          {mytext.split(/\S+/).filter((Element)=>{return Element.length!==0}).length} | <b> Characters Count:</b> {mytext.length}{" "}
          | <b>Minutes Reads:</b> {0.008 * mytext.split(" ").filter((element)=>{return element.length!==0}).length}
        </p>
      </div>
      <div className="container" stylePreview={stylePreview} style={{color: props.black==='light'?'black':'white'}}>
          <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview Text</h2>
          <p style={{color:props.mode==='light'?'black':'white'}}> {mytext.length>0?mytext:"Nothing To Preview!"} </p>
      </div>
      </div>
    
    
    
  );
}
