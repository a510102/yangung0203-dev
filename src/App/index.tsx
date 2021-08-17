import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Home from './pages/Home/Loadable';
import MemberInfo from './pages/MemberInfo/Loadable';
import NotFound from './pages/NotFound/Loadable';
import { Navigation } from './components/Navigation';

import '../styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Helmet
        defaultTitle="研光堂"
      >
        <meta name="description" content="研光堂,國家高等考試合格驗光師、中山醫學大學視光團隊 為您解決戴眼鏡時產生的疑難雜症本店備有高階角膜地圖儀、眼底攝影機、高解析度裂隙燈、眼壓機。" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <title>研光堂</title>
      </Helmet>
      <BrowserRouter>
        <header className="App-header">
          <Navigation />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/memberInfo" component={MemberInfo} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
