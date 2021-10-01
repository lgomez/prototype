import { Router, Link } from "@reach/router"
import logo from './logo.svg';
import './App.css';


const Nav = () => <ul>
  <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>

  <li><h3>Homes</h3></li>
  <li><Link to="locations/huatulco">huatulco</Link></li>
  <li><Link to="locations/los-cabos">los-cabos</Link></li>
  <li><Link to="locations/nuevo-vallarta">nuevo-vallarta</Link></li>
  <li><Link to="locations/puerto-escondido">puerto-escondido</Link></li>
  <li><Link to="locations/riviera-maya">riviera-maya</Link></li>
  <li><Link to="locations/sayulita">sayulita</Link></li>
  <li><Link to="locations/todos-santos">todos-santos</Link></li>
  <li><Link to="locations/troncones">troncones</Link></li>

  <li><h3>About Us</h3></li>
  <li><Link to="/how-it-works">How it works</Link></li>
  <li><Link to="/faq">faq</Link></li>
  <li><Link to="/about-us">About us</Link></li>
  <li><Link to="https://angel.co/company/livekocomo/jobs" target="_blank">careers</Link></li>
  <li><Link to="/press">Press</Link></li>
  <li><Link to="/ask-kocomo">Ask kocomo</Link></li>

  <li><h3>Follow Us</h3></li>
  <li><a href="https://www.instagram.com/gokocomo/">Instagram</a></li>
  <li><a href="https://www.facebook.com/Kocomo-112589897751187">Facebook</a></li>
  <li><a href="https://www.linkedin.com/company/kocomo">LinkedIn</a></li>
  <li><a href="https://twitter.com/gokocomo">Twitter</a></li>
</ul>


const Home = () => <div>Home</div>
const Page = props => <div>{props.slug}</div>
const Location = props => <div>Location: {props.slug}</div>

const App = () => <>
  <Nav/>
  <hr/>
  <Router>
    <Home path="/" />
    <Page path="/:slug" />
    <Location path="/locations/:slug" />
  </Router>
</>

export default App;



