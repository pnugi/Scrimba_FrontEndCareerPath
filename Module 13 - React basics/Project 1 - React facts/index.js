/* remember PageTemplate NOT pageTemplate w/ react :) */
function Header() {
  return (
    <header>
      <nav>
        <img id="reactLogo" src="./react-logo.png" />
        <ul id="navLinks">
          <a href="#">
            <li>Pricing</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ul>
        <li>Was first released 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Kurkikangas development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
