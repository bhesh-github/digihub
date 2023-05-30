import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home';
import NotFoundPage from './components/pages/NotFoundPage';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import CollapsibleTable from './components/forAll/CollapsibleTable';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/collapsibleTable" element={<CollapsibleTable />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
