import React from 'react'
export default function Howtouse(props) {
  return (
    <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <>
        <h1 className='col text-center my-3'>How to Use TextUtils</h1>
        <p>TextUtils is a versatile online tool that allows you to manipulate text easily. Follow these simple steps to make the most of its features:</p>
        <ul>
        <dl>
          <li className='listul'><dt>Convet to Uppercase -</dt></li>
          <dd>If you want to convert any word or paragraph into an uppercase then you can paste the data in texarea and simple click the button your data is converted to upeercase within a 0 second Example:- [sample text = SAMPLE TEXT] </dd>
        </dl>
        <dl>
          <li className='listul'><dt>Convet to Lowercase -</dt></li>
          <dd>If you want to convert any word or paragraph into an lowercase then you can paste the data in texarea and simple click the button your data is converted to lowercase within a 0 second Example:- [SAMPLE TEXT = sample text] </dd>
        </dl>
        <dl>
          <li className='listul'><dt>Clear Text -</dt></li>
          <dd>If you use the textarea and you want to clear it then use this button to alear the textarea </dd>
        </dl>
        <dl>
          <li className='listul'><dt>Copy Text -</dt></li>
          <dd>Your work is Done and you want copy this text and paste in your work directly you can use this button</dd>
        </dl>
        <dl>
          <li className='listul'><dt>Remove Extra Space -</dt></li>
          <dd>When you copy the text or paragraph any other location and paste in to TextUtils Textarea then automatically some extra spaces are created you can use this button to remove any extra spaces in your paragraph Example:- [sample      text = sample text] </dd>
        </dl>
        <dl>
          <li className='listul'><dt>First Letter Capital -</dt></li>
          <dd>If you want to make first letter capital in your text or paragraph then use this button Example:- [sample text = Sample Text] </dd>
        </dl>
        <dl>
          <li className='listul'><dt>Download Text -</dt></li>
          <dd>When yor work is done and you want to download this text or paragraph or data in your System then use download text option and all the text is downloaded in your system as txt. file simple in Notepad </dd>
        </dl>
        <dl>
          <li className='listul'><dt>Extract Email -</dt></li>
          <dd>If you have a big data and you want to use or see the Email id in the hug data simple click the extract mail button and see the email id in popof the window</dd>
        </dl>
        <dl>
          <li className='listul'><dt>Extract Mobile No -</dt></li>
          <dd>If you have a big data and you want to use or see the 10 digit Mobile No in the hug data simple click the extract Mobile No button and see the 10 digit Mobile No in popof the window</dd>
        </dl>
        <dl>
          <li className='listul'><dt>Text Summary -</dt></li>
          <dd>Also you can see the text summary of your data it includes that how many words are there in a text and how many Charectures are there all the counting is present to manipulate the data and also the Preview of your data.</dd>
        </dl>
        
        </ul>
      </>
    </div>
  )
}



