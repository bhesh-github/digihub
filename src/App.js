import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const ServicesDetail = lazy(() =>
	import('./components/pages/services/ServicesDetail')
);
const ScrollToTop = lazy(() => import('./components/forAll/ScrollToTop'));
const Home = lazy(() => import('./components/pages/home/Home'));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));
const Header = lazy(() => import('./components/main/Header'));
const Footer = lazy(() => import('./components/main/Footer'));
const About = lazy(() => import('./components/pages/about/About'));
const ContactUs = lazy(() => import('./components/pages/ContactUs'));
const Services = lazy(() => import('./components/pages/services/Services'));
const OurClients = lazy(() => import('./components/pages/OurClients'));
const OurOfferingsDetail = lazy(() => import('./components/pages/home/ourOffering/OurOfferingsDetail'));
// import ScrollToTop from './components/forAll/ScrollToTop';
// import Home from './components/pages/home/Home';
// import NotFoundPage from './components/pages/NotFoundPage';
// import Header from './components/main/Header';
// import Footer from './components/main/Footer';
// import About from './components/pages/about/About';
// import ContactUs from './components/pages/ContactUs';
// import Services from './components/pages/services/Services';
// import OurClients from './components/pages/OurClients';
// import Products from './components/pages/products/Products';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div></div>}>
				<main className="main">
					{/* <Header /> */}
					<ScrollToTop />
					<Routes>
						<Route path="/">
							<Route index element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/services" element={<Services />} />
							<Route path="/services-detail/:slug" element={<ServicesDetail />} />
							<Route path="/contactUs" element={<ContactUs />} />
							<Route path="/ourValuableClients" element={<OurClients />} />
							<Route path="/ourofferingsdetail" element={<OurOfferingsDetail />} />
							<Route path="*" element={<NotFoundPage />} />
						</Route>
					</Routes>
					<Footer />
				</main>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
