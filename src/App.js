import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home';
import NotFoundPage from './components/pages/NotFoundPage';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import About from './components/pages/about/About';
import ContactUs from './components/pages/ContactUs';
import Services from './components/pages/services/Services';
import OurClients from './components/pages/OurClients';
import Products from './components/pages/products/Products';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contactUs" element={<ContactUs />} />
					<Route path="/ourValuableClients" element={<OurClients />} />
					<Route path="/products" element={<Products />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
