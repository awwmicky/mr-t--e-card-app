import React
, { useRef , useEffect }
from 'react'
import './ErrorPage.css'



export default function ErrorPage (props) {

  const homeBtn = useRef(null);
  const errorNum = useRef(null);
  const errorText = useRef(null);

  // useEffect(() => { console.log('Props:' , props) }, [ props ])
  
  /*  */

  const hoverIn = (e) => {
    // console.log('Mouse In')
    // errorNum.classList.add('pause')
    // errorText.forEach( (elm) => elm.classList.add('play'))
  };

  const hoverOut = (e) => {
    // console.log('Mouse Out')
    // errorNum.classList.remove('pause')
    // errorText.forEach( (elm) => elm.classList.remove('play'))
  };

  useEffect(() => {
    document.addEventListener('mouseover', hoverIn)
    document.addEventListener('mouseout', hoverOut)
    return () => {
      document.removeEventListener('mouseover', hoverIn)
      document.removeEventListener('mouseout', hoverOut)
    }
  }, [ ])

  /*  */

  const redirectHomePage = (e) => props.history.push('/');



  return (
    <main className="component error-page">
      <h2>Error Page</h2>

      <h2 className="error-num" ref={ errorNum }>4 0 4</h2>

      <h2 className="error-text" ref={ errorText }>
        <span className="char">N</span>
        <span className="char">O</span>
        <span className="char">T</span>

        <span className="char"> - </span>

        <span className="char">F</span>
        <span className="char">O</span>
        <span className="char">U</span>
        <span className="char">N</span>
        <span className="char">D</span>
      </h2>

      <br/>
      
      {/* <p>Well this has been a journey, so...</p> */}
      <button 
        className="home-btn"
        ref={ homeBtn }
        // onMouseOver={  }
        // onMouseOut={  }
        onClick={ redirectHomePage }
      >
        <span className="text">Home</span>
        <span className="liquid"></span>
      </button>
    </main>
  );

}