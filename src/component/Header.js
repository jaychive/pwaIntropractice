import Navi from "./Navi";

const Header = () => {
  return (
    <header className="App-header d-flex justify-content-between align-items-center px-lg-5 py-1">
      <h1 className="mb-0">
        <a href="" className="d-block">
          <img src="./img/jaymeLogo.svg" className="img-fluid w-100" alt="logo" />
        </a>
      </h1>
      <Navi></Navi>        
    </header>
  );
};



export default Header;