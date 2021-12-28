
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
  NotFound,
  Finans,
  Lawyer,
  Management,
  Personnel
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
          <Route path='ServiseMain/Finans' element={<Finans />} />
          <Route path='ServiseMain/Lawyer' element={<Lawyer />} />
          <Route path='ServiseMain/Management' element={<Management />} />
          <Route path='ServiseMain/Personnel' element={<Personnel />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
