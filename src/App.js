import './assets/style/main.scss'

// pages
import Home from './pages/Home'
import Footer from './components/Footer'

import 'antd/dist/antd.css';
import Header from './containers/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewsPage from './pages/NewsPage/NewsPage'
import SortedPage from './pages/SortedPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/feed/:news'  component={NewsPage}/>
          <Route path='/:title'  component={SortedPage}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
