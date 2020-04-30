import React, {
  useState , useEffect , useRef
} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './Header.css'
import students from '../../students.json'



function Header (props) {

  const [state , setState] = useState({
    display: false,
    options: students,
    search: ''
  });
  const {
    display,
    options,
    search
  } = state;

  // useEffect(() => { console.log('Props:' , props) }, [ props ])
  // useEffect(() => { console.log('Display:' , display) }, [ display ])
  // useEffect(() => { console.log('Options:' , options) }, [ options ])
  // useEffect(() => { console.log('Search:' , search) }, [ search ])

  /*  */

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const clickEvent = (e) => {
    const { current: searchForm } = searchRef;
    if ( searchForm && !searchForm.contains(e.target) ) {
      setState( (prevState) => ({ ...prevState , display:false }) )
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickEvent)
    return () => {
      document.removeEventListener('click', clickEvent)
    }
  }, [ ])

  /*  */

  const submitForm = (e) => {
    e.preventDefault()
    const studentRoute = search.toLowerCase().split(' ').join('-');
    console.log('Student:' , studentRoute)
    props.history.push(`/${ studentRoute }`)
    setState( (prevState) => ({ ...prevState , search:'' }) )
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setState( (prevState) => ({ ...prevState , search:value }) )
  };

  const toggleOptions = (e) => {
    setState( (prevState) => ({ ...prevState , display:true }) )
  };

  const setOption = (e) => {
    e.preventDefault()
    // inputRef.current.focus()

    const { textContent } = e.target;
    const studentRoute = textContent.toLowerCase().split(' ').join('-');
    console.log('Student:' , studentRoute)
    props.history.push(`/${ studentRoute }`)

    setState( (prevState) => ({ ...prevState , display:false }))
  };

  const filterOption = () => {
    return options
    .filter( (opt) => (
      opt.name.startsWith(search)
    ))
    .map( (opt , idx) => (
      <span
        key={idx}
        className="student-opt"
        onClick={ setOption }
      >{ opt.name }
      </span>
    ))
  };

  /*  */

  return (
    <header>
      <div className="container-wrapper">
        <h1 className="project-title">
          <Link to="/">
            { `${ `Thank You { MR - T }` }` }
          </Link>
        </h1>
        <form
          className="search-form"
          ref={ searchRef }
          onSubmit={ submitForm }
        >
          <div className="search-box">
            <input
              type="search"
              name="search"
              className="search-input"
              placeholder="enter student name…"
              autoComplete="off"
              spellCheck="false"
              tabIndex="1"
              ref={ inputRef }
              value={ search }
              onChange={ handleChange }
              onClick={ toggleOptions }
              // autoFocus
            />
            <button type="submit" className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          {
            display && (
              <section
                className="search-selection"
              >{ filterOption() }
              </section>
            )
          }
        </form>
      </div>
    </header>
  );

}

export default withRouter(Header)