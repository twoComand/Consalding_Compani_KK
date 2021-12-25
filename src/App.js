
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import {
  HomeMain,
  AboutUsMain,
  ServiseMain,
  NewsMain,
  PriceListMain,
  ContactsMain,
  Layout,
  NotFound
} from './components';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeMain />} />
          <Route path='AboutUsMain' element={<AboutUsMain />} />
          <Route path='ServiseMain' element={<ServiseMain />} />
          <Route path='PriceListMain' element={<PriceListMain />} />
          <Route path='NewsMain' element={<NewsMain />} />
          <Route path='ContactsMain' element={<ContactsMain />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
