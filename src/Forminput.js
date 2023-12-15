import React, { useState } from 'react';

export default function Forminput(props) {
    function toupcase() {
        console.log("Button is clicked" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !!", "Sucess");
    }
    function tolowcase() {
        console.log("Button is clicked for Lowercase" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !!", "Sucess");

    }
    function cleartext() {
        console.log("Button is clicked for clear text" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared!!","Sucess");

    }
    function handelonchange(event) {
        console.log("handelonchange button clicked")
        setText(event.target.value)
    }
    const copytext=()=>{
        console.log("Text is copied");
        var text = document.getElementById('exampleFormControlTextarea1')
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is Copied!!","Sucess");

    }
    function removeextraspace(){
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces Removed!!","Sucess");

    }
    function firstlettercapital(){
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText);
    props.showAlert("First Letter Capitalised!!","Sucess");

    }
    function downloadTextFile() {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'downloaded_text.txt';
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);
        props.showAlert("Text file is Downloded in txt Format!!","Sucess");

    }
    function extractEmailsFromText() {
        // Regular expression for matching email patterns
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        
        // Find all matches in the text
        const matches = text.match(emailRegex);
    
        // Display the extracted emails
        if (matches && matches.length > 0) {
            alert('Extracted Emails:\n' + matches.join('\n'));
        } else {
            alert('No emails found in the text.');
        }
    }
    function extractMobileNumbersFromText() {
        // Regular expression for matching mobile number patterns
        const mobileRegex = /\b\d{10}\b/g;
    
        // Find all matches in the text
        const matches = text.match(mobileRegex);
    
        // Display the extracted mobile numbers
        if (matches && matches.length > 0) {
            alert('Extracted Mobile Numbers:\n' + matches.join('\n'));
        } else {
            alert('No mobile numbers found in the text.');
        }
    }
    
    
    const [text, setText] = useState(""); // you can remove this line also
    return (
        <>
        <div className='container my-5'>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Enter any Text or Paragraph Here :-</h2>
            </div>
            <div className="mb-3">
<textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} id="exampleFormControlTextarea1" rows="8" onChange={handelonchange}></textarea>
</div>
<button className='btn btn-danger' onClick={toupcase} >Convert to Uppercase</button>
<button className='btn btn-danger mx-2' onClick={tolowcase} >Convert to Lowercase</button>
<button className='btn btn-danger' onClick={cleartext} >Clear Text</button>
<button className='btn btn-danger mx-2' onClick={copytext} >Copy Text</button>
<button className='btn btn-danger' onClick={removeextraspace} >Remove Extra Space</button>
<button className='btn btn-danger mx-2' onClick={firstlettercapital} >First Letter Capital</button>
<button className='btn btn-danger' onClick={downloadTextFile} >Download Text</button>
<button className='btn btn-danger my-2 mx-1' onClick={extractEmailsFromText} >Extract Email</button>
<button className='btn btn-danger my-2 mx-1' onClick={extractMobileNumbersFromText} >Extract Mobile No.</button>

<div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2>Your Text Summary</h2>
<h5>{text.split(" ").length} Words and {text.length} Charectures</h5>
<h2>Preview :-</h2>  
<p>{text.length>0?text:"Enter Something in the text box above to Preview"}</p> 
</div>
</div>

</>
    )
};
