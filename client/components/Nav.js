class Nav extends React.Component {

  constructor(){
    super();
  }

  render(){
    return(
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search />
        </div>
      </nav>
    );
  }
}

window.Nav = Nav;
