
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Breadcramb from './Breadcramb';
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
  Personnel,
  OurGoal,
  ExpertAdvice,
} from './components';

const Separator = ({ children, ...props }) => (
  <span style={{ color: 'teal' }} {...props}>
    {children}
  </span>
)

const itemBread = [
  { to: '/', label: 'HomeMain' },
  { to: '/AboutUsMain', label: 'AboutUsMain' },
  { to: '/ServiseMain', label: 'ServiseMain' },
  { to: '/PriceListMain', label: 'PriceListMain' },
  { to: '/NewsMain', label: 'NewsMain' },
  { to: '/ContactsMain', label: 'ContactsMain' },
];


function App() {
  return (
    <div className="App">
      <Breadcramb separator={<Separator>/</Separator>}>
        {itemBread.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcramb>

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
          <Route path='HomeMain/OurGoal' element={<OurGoal />} />
          <Route path='#ExpertAdvice' element={<ExpertAdvice />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
