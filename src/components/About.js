// import React, { useState } from 'react'

export default function About(props) {

  // const [myStyle, setmyStyle] = useState({
  //   color:"black",
  //   backgroundColor:"white"
  // })
  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleMode = () => {
  //   if(myStyle.color === 'black'){
  //     setmyStyle({
  //       color:"white",
  //       backgroundColor: "black",
  //       border: '1px solid white'
  //     })
  //     setBtnText("Enable Light Mode");
  //   }
  //   else{
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white"
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : "#233343",
    backgroundColor: props.mode === 'dark' ? '#233343' : 'white',
    // border:"2px solid",
    // borderColor: props.mode === 'dark' ? 'white' : "#233343",
  }


  return (
    <div className='container'>
      <h1 className='my-3 d-flex align-items-center justify-content-center' style={{color: props.mode === 'dark' ? 'white' : "#17212b",}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <p>Welcome to TextWiz! Our app makes it easy to manipulate and preview your text in real-time. Simply enter your text and choose from a variety of tools, including uppercase, lowercase, clear text, and copy text. You can also remove extra spaces to ensure that your text is clean and easy to read.</p>

              <p>In addition, TextWiz provides a live preview of your text, showing you how long it will take to read and how many words and characters are present. With TextWiz, you can quickly and easily optimize your text for readability and clarity.</p>

              <p>Whether you're a writer, editor, student, or just someone who wants to improve their text, TextWiz is the perfect tool for you. Try it out today and see the difference it can make!</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use!</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <p>At TextWiz, we believe that everyone should have access to powerful text editing tools without having to pay a penny. That's why we're proud to offer TextWiz completely free of charge.</p>
              <p>Our app is designed to be simple, intuitive, and user-friendly, so you can quickly and easily edit and preview your text with ease. We believe that everyone should have access to the tools they need to succeed, whether you're a professional writer or just someone who wants to improve their writing skills.</p>
              <p>So go ahead and use TextWiz to your heart's content! There are no hidden fees or charges, and we'll never ask you for your credit card information or personal details. Just use TextWiz to improve your text, and let us know if you have any feedback or suggestions for improvement.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>FAQ's</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <ol>
                <li>What is TextWiz, and how does it work?</li>
                <li>Is TextWiz completely free to use, or are there any hidden fees?</li>
                <li>How many text editing tools does TextWiz offer, and what are they?</li>
                <li>Can I use TextWiz on any device or operating system?</li>
                <li>Does TextWiz store my text, and if so, is it secure?</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <strong>Miscellaneous</strong>
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <p>Privacy of Data: Tools are built-with and functions-in Client Side JavaScripting and HTML5. No server calls are made during the use of these tools.</p>
              <p>Log Files: This website's webserver records log files. The information inside the log files includes: ip address, date/time stamp, referring page and user agent.</p>
              <p>Cookies: This website does not use browser cookies but does use local web storage to pass data between text tools. This website's statistical service will load a third party browser cookie.</p>
              <p>Disclaimer: Tools provided as-is, without warranty of any kind and used at your own risk.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container my-3'>
          <button type='button' onClick={toggleMode} className="btn btn-primary mx-1" >{btnText}</button>
        </div> */}
    </div>
  )
}
