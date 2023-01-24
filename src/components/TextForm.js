import React , {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        // console.log("Upper case was cliked ");
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        // console.log("Upper case was cliked ");
        setText(newText)
    }
    const handeResetClick=()=>{
        let newText="";
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("On change ");
        setText(event.target.value);
    }
    
    const[text, setText]= useState('');
    
     const [myStyle, setMyStyle ] = useState(
        {
            color:'black',
            backgroundColor:'white',
        }
     )
     const [btntext, setBtnText] = useState("Enable Dark Mode")
     const toggleStyle=()=>{
        if(myStyle.color==='white'){
            setMyStyle(
                {
                    color:'black',
                    backgroundColor:'white'
                }
            )
            setBtnText("Enable Light Mode");
        }else{
            setMyStyle(
                {
                    color:'white',
                    backgroundColor:'black'
                }
            )
            setBtnText("Enable Dark Mode");
        }
        
     }
  return (
    <>
        <div className="container" style={myStyle}>
            <h1>    
                {props.heading}
            </h1>
            <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handeResetClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
            <button onClick={toggleStyle} className="btn btn-outline-primary" type="button" style={myStyle}>{btntext}</button>
            
        </div>
        
        <div className="container my-2">
        <h1>Your Text Summary</h1>
        
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").length}Minutes Read </p>
        </div>
        
       
        
        </>
  )
}
