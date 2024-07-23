import logo from "./logo1.png";
function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="React" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
