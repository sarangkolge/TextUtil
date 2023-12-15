import React from 'react'

export default function Contact(props) {
    return (
        <div>
            <>
                <div>
                    <div className='heading' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <span className='contimg'>
                        <img src='\contactimg.jpg' height={300} width={300} />
                    </span>
                        <h1>Contact Us</h1>
                        
                        <p>Welcome to TextUtil, your go-to platform for text manipulation! This website is proudly designed and coded by <br></br>Sarang Kolge. If you have any questions,
                            feedback, or need to get in touch, feel free to reach out.</p>

                        <h3>About the Developer</h3>
                        <h4>Sarang Kolge</h4>
                        <ul>
                            <li><b>Portfolio</b>: www.sarangkolge.com</li>
                            <li><b>LinkedIn:</b> www.linkedin.com/in/sarang-kolge</li>
                            <li><b>Facebook:</b> www.facebook.com/sarangkolge</li>
                            <li><b>Instagram:</b> @sarangkolge</li>

                        </ul>
                        <h4>Get in Touch</h4>
                        <p>Have a question, suggestion, or just want to connect? Feel free to drop a message through the contact form below:</p>
                        <form className='form'>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address :- </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password :- </label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                    </div>
                    


                </div>
            </>
        </div>
    )
}
