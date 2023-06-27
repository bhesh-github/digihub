import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { BiAnalyse } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import Header from '../../main/Header';
import DOMPurify from 'dompurify';
import MiniBanner from '../../forAll/MiniBanner';
// -------------------------------------
import apims from '../../../images/services/servicesIcons/APIMS@4x-8.png';
import business from '../../../images/services/servicesIcons/Business process management@4x-8.png';
import creditX from '../../../images/services/servicesIcons/Credit X@4x-8.png';
import digitalRemittance from '../../../images/services/servicesIcons/Digital remittance platfrom@4x-8.png';
import instaLoan from '../../../images/services/servicesIcons/Insta loan@4x-8.png';
import walletX from '../../../images/services/servicesIcons/Wallet X@4x-8.png';
// ----------------------------------------
import { ReactComponent as ApimsMiddle } from '../../../images/services/servicesDetail/APIMS Middle sction.svg';
import middelVector from '../../../images/services/servicesDetail/middle.png';
const ServicesDetail = ({ service }) => {
	const [contentState, setContentState] = useState({});
	// const [activeBtnClass, setActiveBtnClass] = useState();

	let { slug } = useParams();

	useEffect(() => {
		setContentState(service[slug]);
	}, []);

	const iconConditions = {
		APIMS: apims,
		'Digital Remittance Platform': digitalRemittance,
		'Credit X': creditX,
		'Insta Loan': instaLoan,
		'Wallet X': walletX,
		'Business Process Management': business,
	};
	const sanitizedData = () => ({
		__html: DOMPurify.sanitize(contentState.description),
	});
	const filterContent = (sentId) => {
		const c = service.find((item) => item.id === sentId);
		setContentState(c);
	};
	// console.log(activeContent);
	const navButton = service.map((item) => {
		const { id, name } = item;
		const activeBtnClass = contentState.id === id && 'active-btn';
		// contentState.id === id && setActiveBtnClass('active-btn')
		return (
			<Button
				className={`nav-button ${activeBtnClass}`}
				key={id}
				onClick={() => {
					setContentState(id);
					filterContent(id);
				}}
			>
				{name}
			</Button>
		);
	});

	return (
		<>
			<Header />
			<MiniBanner caption="Our Services" />
			<div className="services-detail-page">
				{/* <h1 className="heading">Our Services</h1> */}
				<div className="contents-wrapper">
					<div className="contents-nav">{navButton}</div>
					<div key={contentState.id} className="content">
						<div className="inner">
							<img className="c-icon" src={iconConditions[contentState.name]} />
							{/* <br /> */}
							<span className="title">{contentState.name}</span>
							<br />
							<div className="alignment">
								<span
									className="description"
									// dangerouslySetInnerHTML={sanitizedData()}
									dangerouslySetInnerHTML={{
										__html:
											contentState.description && contentState.description[0],
									}}
								/>
								<div className="img-div">
									<ApimsMiddle className="description-png" />
								</div>
								<span
									className="description"
									// dangerouslySetInnerHTML={sanitizedData()}
									dangerouslySetInnerHTML={{
										__html:
											contentState.description && contentState.description[1],
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesDetail;

ServicesDetail.defaultProps = {
	service: [
		{
			id: 0,
			name: 'APIMS',
			description: [
				'One Point APIMS (API Management System) is a distinctive product designed to provide financial institutions with centralized control and management of their internal and external APIs (Application Programming Interfaces). APIs are a set of protocols and tools that allow different software applications to communicate and interact with each other. APIMS offers a comprehensive solution that enables financial institutions, such as banks or insurance companies, to efficiently handle their APIs. It provides a range of features and functionalities that streamline the management process and enhance overall operational efficiency. <br/>',
				"Additionally, APIMS incorporates a self-coding methodology, which simplifies the process of creating and implementing APIs. This methodology enables developers to generate code automatically, based on predefined templates and configurations. It eliminates the need for manual coding from scratch, saving time and reducing the potential for errors. The self-coding approach also promotes consistency and standardization across the organization's APIs. <br/> <br/> By leveraging APIMS, financial institutions can bring their digital products to market up to 5 times faster compared to traditional methods. This accelerated timeline can provide a competitive advantage, allowing institutions to quickly adapt to changing market demands and deliver innovative solutions to customers.<br/><br/><span style='text-align: center; font-size: 1.5em; font-weight: 600;'><center>'APIMS offers centralized control and management capabilities.'</center></span> <br/> Furthermore,  It provides a user-friendly interface that allows administrators to oversee and govern all APIs from a single platform. This centralized control ensures better security, monitoring, and governance of APIs, reducing the risk of unauthorized access or misuse. <br/> <br/> In summary, One Point APIMS is a unique product that empowers financial institutions with the tools and capabilities to effectively manage their APIs. Through reusable API components and a self-coding methodology, APIMS enables faster product development and time-to-market. It also offers centralized control and management, ensuring security and governance of APIs. Overall, APIMS plays a crucial role in helping financial institutions embrace digital transformation and deliver innovative solutions to their customers.",
			],
			// description:
			// 	"One Point APIMS (API Management System) is a distinctive product designed to provide financial institutions with centralized control and management of their internal and external APIs (Application Programming Interfaces). APIs are a set of protocols and tools that allow different software applications to communicate and interact with each other. APIMS offers a comprehensive solution that enables financial institutions, such as banks or insurance companies, to efficiently handle their APIs. It provides a range of features and functionalities that streamline the management process and enhance overall operational efficiency. <br/> <br/> <img src='../../../images/services/servicesDetail/middle.png' style='width: 60%'/><br/> <br/> Additionally, APIMS incorporates a self-coding methodology, which simplifies the process of creating and implementing APIs. This methodology enables developers to generate code automatically, based on predefined templates and configurations. It eliminates the need for manual coding from scratch, saving time and reducing the potential for errors. The self-coding approach also promotes consistency and standardization across the organization's APIs. <br/> <br/> By leveraging APIMS, financial institutions can bring their digital products to market up to 5 times faster compared to traditional methods. This accelerated timeline can provide a competitive advantage, allowing institutions to quickly adapt to changing market demands and deliver innovative solutions to customers. <br/> <br/> <span style=' text-align: center; font-size: 1.5em; font-weight: 600;'><center>'APIMS offers centralized control and management capabilities.'</center></span> <br/> Furthermore, It provides a user-friendly interface that allows administrators to oversee and govern all APIs from a single platform. This centralized control ensures better security, monitoring, and governance of APIs, reducing the risk of unauthorized access or misuse. <br/> <br/> In summary, One Point APIMS is a unique product that empowers financial institutions with the tools and capabilities to effectively manage their APIs. Through reusable API components and a self-coding methodology, APIMS enables faster product development and time-to-market. It also offers centralized control and management, ensuring security and governance of APIs. Overall, APIMS plays a crucial role in helping financial institutions embrace digital transformation and deliver innovative solutions to their customers.",
		},
		{
			id: 1,
			name: 'Credit X',
			description: [
				'Credit X is a system designed to automate various stages of the credit origination process, including appraisal and disbursement, while incorporating features like automated risk classifications and differential pricing for customers. It offers a seamless connection with credit bureaus, alternate data sources, and all relevant stakeholders involved in the lending lifecycle. One of the key features of Credit X is its fully automated risk classifications. This means that the system utilizes advanced algorithms and data analysis techniques to assess the creditworthiness of applicants. By analyzing factors such as credit history, income, and other relevant data, Credit X can automatically classify the risk associated with each applicant.<br/>',
				" This automated risk classification streamlines the evaluation process and reduces the need for manual intervention, leading to increased efficiency and accuracy. <br/> <br/> Furthermore, Credit X incorporates differential pricing capabilities. This means that the system can dynamically adjust interest rates or other terms based on the risk classification of individual customers. Higher-risk customers may be assigned higher interest rates, while lower-risk customers may enjoy more favorable terms. This personalized pricing approach helps financial institutions optimize their lending strategies and cater to the specific needs and risk profiles of different customers. <br/> <br/> Credit X also emphasizes seamless integration with various data sources. It connects with credit bureaus, which provide credit reports and scores, allowing financial institutions to assess an applicant's creditworthiness. In addition to credit bureaus, Credit X can integrate with alternate data sources, such as utility bills, rental history, or digital payment records. By accessing a broader range of data, the system can provide a more comprehensive view of an applicant's financial behavior and reliability. <br/> <br/>Moreover, Credit X facilitates collaboration and communication among all stakeholders involved in the lending process. This includes lenders, borrowers, underwriters, and other relevant parties. By providing a centralized platform, Credit X enables seamless information exchange and real-time updates, reducing delays and improving overall efficiency. As a result of these features, Credit X significantly reduces the turnaround time for lending. By automating various processes, streamlining risk assessment, and improving communication, the system cuts down the time required from application to disbursement by more than half. This accelerated lending process benefits both financial institutions and customers, allowing for faster access to credit and improved customer satisfaction. <br/> <br/> <span style=' text-align: center; font-size: 1.5em; font-weight: 600;'><center>'APIMS offers centralized control and management capabilities.'</center></span> <br/>In summary, Credit X is a comprehensive solution that automates credit origination, appraisal, and disbursement processes. With its automated risk classifications, personalized pricing, seamless data integration, and efficient stakeholder collaboration, Credit X significantly reduces the turnaround time for lending. By leveraging technology and data-driven insights, Credit X empowers financial institutions to enhance their lending operations and deliver a faster, more streamlined experience for customers.",
			],
			// description:
			// 	"Credit X is a system designed to automate various stages of the credit origination process, including appraisal and disbursement, while incorporating features like automated risk classifications and differential pricing for customers. It offers a seamless connection with credit bureaus, alternate data sources, and all relevant stakeholders involved in the lending lifecycle.<br/> <br/> One of the key features of Credit X is its fully automated risk classifications. This means that the system utilizes advanced algorithms and data analysis techniques to assess the creditworthiness of applicants. By analyzing factors such as credit history, income, and other relevant data, Credit X can automatically classify the risk associated with each applicant. This automated risk classification streamlines the evaluation process and reduces the need for manual intervention, leading to increased efficiency and accuracy. <br/> <br/> Furthermore, Credit X incorporates differential pricing capabilities. This means that the system can dynamically adjust interest rates or other terms based on the risk classification of individual customers. Higher-risk customers may be assigned higher interest rates, while lower-risk customers may enjoy more favorable terms. This personalized pricing approach helps financial institutions optimize their lending strategies and cater to the specific needs and risk profiles of different customers. <br/> <br/> Credit X also emphasizes seamless integration with various data sources. It connects with credit bureaus, which provide credit reports and scores, allowing financial institutions to assess an applicant's creditworthiness. In addition to credit bureaus, Credit X can integrate with alternate data sources, such as utility bills, rental history, or digital payment records. By accessing a broader range of data, the system can provide a more comprehensive view of an applicant's financial behavior and reliability. <br/> <br/>Moreover, Credit X facilitates collaboration and communication among all stakeholders involved in the lending process. This includes lenders, borrowers, underwriters, and other relevant parties. By providing a centralized platform, Credit X enables seamless information exchange and real-time updates, reducing delays and improving overall efficiency. <br/> <br/>As a result of these features, Credit X significantly reduces the turnaround time for lending. By automating various processes, streamlining risk assessment, and improving communication, the system cuts down the time required from application to disbursement by more than half. This accelerated lending process benefits both financial institutions and customers, allowing for faster access to credit and improved customer satisfaction. <br/><br/>In summary, Credit X is a comprehensive solution that automates credit origination, appraisal, and disbursement processes. With its automated risk classifications, personalized pricing, seamless data integration, and efficient stakeholder collaboration, Credit X significantly reduces the turnaround time for lending. By leveraging technology and data-driven insights, Credit X empowers financial institutions to enhance their lending operations and deliver a faster, more streamlined experience for customers.",
		},
		{
			id: 2,
			name: 'Insta Loan',
			description: [
				'InstaLoan is an innovative automated micro-lending solution designed to provide instant credit to customers during various events such as shopping, emergencies, or missed payday. It leverages advanced artificial intelligence (AI) and integrates with comprehensive data sources to assess the creditworthiness of individuals in real-time, enabling banks to disburse loans quickly and efficiently. The key feature of InstaLoan is its ability to access rich data sources. This includes traditional credit bureau information, as well as alternative data such as transaction history, social media activity, and other relevant digital footprints. By analyzing this vast array of data, InstaLoan can generate a comprehensive credit profile for each customer, allowing for accurate and timely decision-making. <br/>',
				"The AI component of InstaLoan plays a crucial role in automating the lending process. Through machine learning algorithms, the system continuously learns and adapts based on historical data and customer behavior. This auto-calibration helps optimize the lending criteria, reducing the default rates and improving overall risk management for banks.  <br/><br/>By integrating InstaLoan into their operations, banks can offer instant loans to customers without the need for lengthy application processes or manual assessments. This quick and convenient access to credit enhances customer experience and provides financial support during urgent situations. <br/><br/>Moreover, InstaLoan offers significant benefits to banks in terms of revenue generation. By leveraging the advanced AI capabilities and accurate risk assessment, banks can confidently disburse loans to a wider customer base. This expands their lending portfolio and increases the overall loan volume, resulting in higher interest income and revenue.<br/> <br/> <span style=' text-align: center; font-size: 1.5em; font-weight: 600;'><center>'APIMS offers centralized control and management capabilities.'</center></span> <br/>Furthermore, with reduced default rates facilitated by the AI-powered auto-calibration, banks can minimize their risk exposure and enhance the profitability of their lending operations. The combination of improved risk management and increased loan volume contributes to the overall growth and success of financial institutions.In summary, InstaLoan is a unique automated micro-lending solution that utilizes advanced AI and comprehensive data sources to offer instant credit to customers during events like shopping, emergencies, or missed payday. It optimizes risk assessment, streamlines the lending process, and enables banks to increase their revenue while providing timely financial assistance to customers.",
			],
			// description:
			// 	'InstaLoan is an innovative automated micro-lending solution designed to provide instant credit to customers during various events such as shopping, emergencies, or missed payday. It leverages advanced artificial intelligence (AI) and integrates with comprehensive data sources to assess the creditworthiness of individuals in real-time, enabling banks to disburse loans quickly and efficiently.<br/> <br/> The key feature of InstaLoan is its ability to access rich data sources. This includes traditional credit bureau information, as well as alternative data such as transaction history, social media activity, and other relevant digital footprints. By analyzing this vast array of data, InstaLoan can generate a comprehensive credit profile for each customer, allowing for accurate and timely decision-making.  <br/><br/>The AI component of InstaLoan plays a crucial role in automating the lending process. Through machine learning algorithms, the system continuously learns and adapts based on historical data and customer behavior. This auto-calibration helps optimize the lending criteria, reducing the default rates and improving overall risk management for banks.  <br/><br/>By integrating InstaLoan into their operations, banks can offer instant loans to customers without the need for lengthy application processes or manual assessments. This quick and convenient access to credit enhances customer experience and provides financial support during urgent situations. <br/><br/>Moreover, InstaLoan offers significant benefits to banks in terms of revenue generation. By leveraging the advanced AI capabilities and accurate risk assessment, banks can confidently disburse loans to a wider customer base. This expands their lending portfolio and increases the overall loan volume, resulting in higher interest income and revenue. <br/><br/>Furthermore, with reduced default rates facilitated by the AI-powered auto-calibration, banks can minimize their risk exposure and enhance the profitability of their lending operations. The combination of improved risk management and increased loan volume contributes to the overall growth and success of financial institutions. <br/><br/>In summary, InstaLoan is a unique automated micro-lending solution that utilizes advanced AI and comprehensive data sources to offer instant credit to customers during events like shopping, emergencies, or missed payday. It optimizes risk assessment, streamlines the lending process, and enables banks to increase their revenue while providing timely financial assistance to customers.',
		},
		{
			id: 3,
			name: 'Digital Remittance Platform',
			description: [
				'The Digital Remittance Platform (DRP) developed by Digihub is an innovative solution designed to assist traditional remittance players in transforming their services into a digital format that operates 24/7. It incorporates a modern and global fintech approach to revolutionize the way remittances are traditionally conducted.Traditional remittance methods often involve physical visits to remittance centers or banks during specific working hours, which can be inconvenient for customers. The DRP eliminates these limitations by introducing a digital framework that enables remittance services to be available around the clock. By leveraging digital technology, the DRP allows remittance players to offer their services through online platforms, mobile applications, or other digital channels. This empowers customers to initiate remittance transactions at their convenience, regardless of their geographical location or the time of day. <br/>',
				"The DRP not only facilitates the digitization of remittance services but also incorporates modern fintech practices. This means that it incorporates cutting-edge financial technologies, such as blockchain, artificial intelligence, and data analytics, to streamline and enhance the remittance process. <br/><br/>For example, by utilizing blockchain technology, the DRP can provide secure and transparent transactions while minimizing the need for intermediaries. This reduces costs, improves transaction speed, and enhances trust in the remittance process.Additionally, the DRP leverages artificial intelligence and data analytics to automate various aspects of remittance operations. It can analyze customer data to personalize services, detect potential fraud or money laundering activities, and provide data-driven insights to optimize operational efficiency. <br/><br/>By adopting the DRP, traditional remittance players can reimagine their business models and align with the evolving digital landscape. They can offer a seamless and user-friendly remittance experience to their customers, catering to the increasing demand for digital financial services. <br/> <br/> <span style=' text-align: center; font-size: 1.5em; font-weight: 600;'><center>'APIMS offers centralized control and management capabilities.'</center></span> <br/>Furthermore, the DRP allows remittance providers to expand their reach globally. By transcending physical boundaries, they can offer their services to a wider customer base, including migrants, international businesses, and individuals requiring cross-border money transfers. This opens up new market opportunities and enables remittance players to tap into previously inaccessible customer segments. <br/><br/>In summary, the Digital Remittance Platform (DRP) developed by Digihub offers traditional remittance players the means to transform their services into a digital format that operates 24/7. It embraces modern fintech approaches and utilizes technologies such as blockchain, AI, and data analytics to enhance security, efficiency, and customer experience. The DRP enables remittance providers to adapt to the digital era, expand their market reach, and offer convenient and streamlined remittance services to customers worldwide.",
			],
			// description:
			// 	'The Digital Remittance Platform (DRP) developed by Digihub is an innovative solution designed to assist traditional remittance players in transforming their services into a digital format that operates 24/7. It incorporates a modern and global fintech approach to revolutionize the way remittances are traditionally conducted.  <br/><br/>Traditional remittance methods often involve physical visits to remittance centers or banks during specific working hours, which can be inconvenient for customers. The DRP eliminates these limitations by introducing a digital framework that enables remittance services to be available around the clock. <br/><br/>By leveraging digital technology, the DRP allows remittance players to offer their services through online platforms, mobile applications, or other digital channels. This empowers customers to initiate remittance transactions at their convenience, regardless of their geographical location or the time of day. <br/><br/>The DRP not only facilitates the digitization of remittance services but also incorporates modern fintech practices. This means that it incorporates cutting-edge financial technologies, such as blockchain, artificial intelligence, and data analytics, to streamline and enhance the remittance process. <br/><br/>For example, by utilizing blockchain technology, the DRP can provide secure and transparent transactions while minimizing the need for intermediaries. This reduces costs, improves transaction speed, and enhances trust in the remittance process.<br/> <br/>Additionally, the DRP leverages artificial intelligence and data analytics to automate various aspects of remittance operations. It can analyze customer data to personalize services, detect potential fraud or money laundering activities, and provide data-driven insights to optimize operational efficiency. <br/><br/>By adopting the DRP, traditional remittance players can reimagine their business models and align with the evolving digital landscape. They can offer a seamless and user-friendly remittance experience to their customers, catering to the increasing demand for digital financial services. <br/><br/>Furthermore, the DRP allows remittance providers to expand their reach globally. By transcending physical boundaries, they can offer their services to a wider customer base, including migrants, international businesses, and individuals requiring cross-border money transfers. This opens up new market opportunities and enables remittance players to tap into previously inaccessible customer segments. <br/><br/>In summary, the Digital Remittance Platform (DRP) developed by Digihub offers traditional remittance players the means to transform their services into a digital format that operates 24/7. It embraces modern fintech approaches and utilizes technologies such as blockchain, AI, and data analytics to enhance security, efficiency, and customer experience. The DRP enables remittance providers to adapt to the digital era, expand their market reach, and offer convenient and streamlined remittance services to customers worldwide.',
		},
		{
			id: 4,
			name: 'Wallet X',
			description: [
				'Wallet X is a versatile and customizable electronic wallet solution that can be implemented and used globally. It offers a range of features designed to provide users with a personalized and localized experience while also improving their financial well-being. Built on a microservice architecture, Wallet X is designed to be scalable, flexible, and adaptable to the needs of various markets and regions. One of the key strengths of Wallet X is its focus on local commerce. It enables users to engage in transactions and interact with businesses in their local communities, fostering economic growth and supporting local businesses. By offering localized features, such as language support, local currency integration, and tailored promotions, Wallet X aims to create a seamless and familiar experience for users in different regions. With Wallet X, users can perform a wide range of financial activities conveniently and securely.  <br/>',
				"They can store multiple payment methods, such as credit cards, bank accounts, or digital wallets, in one place, making it easier to manage their finances. Wallet X also supports various transaction types, including peer-to-peer transfers, bill payments, merchant payments, and online shopping, providing users with flexibility and convenience in their daily financial transactions.<br/> <br/>In addition to transactional features, Wallet X also offers tools and resources to enhance users' financial lives. This may include budgeting and expense tracking features, savings and investment options, financial education resources, and personalized recommendations based on user spending patterns and financial goals. By empowering users with these capabilities, Wallet X aims to help them make informed financial decisions and improve their overall financial well-being. <br/><br/>  <span style=' text-align: center; font-size: 1.5em; font-weight: 600;'><center>'APIMS offers centralized control and management capabilities.'</center></span> <br/>The microservice architecture of Wallet X allows for easy integration with existing systems and technologies, making it a flexible solution for businesses and organizations. This architecture enables modular development and deployment, allowing for rapid updates and enhancements. Wallet X can be customized and branded according to the requirements of businesses, enabling them to create a unique and tailored user experience. <br/><br/>Overall, Wallet X is a versatile e-wallet solution that combines localization, convenience, and financial empowerment. Its features and architecture make it suitable for a wide range of users and markets, providing them with a seamless and engaging financial experience while supporting local commerce and improving financial outcomes.",
			],
			// description:
			// 	"Wallet X is a versatile and customizable electronic wallet solution that can be implemented and used globally. It offers a range of features designed to provide users with a personalized and localized experience while also improving their financial well-being. Built on a microservice architecture, Wallet X is designed to be scalable, flexible, and adaptable to the needs of various markets and regions. <br/><br/> One of the key strengths of Wallet X is its focus on local commerce. It enables users to engage in transactions and interact with businesses in their local communities, fostering economic growth and supporting local businesses. By offering localized features, such as language support, local currency integration, and tailored promotions, Wallet X aims to create a seamless and familiar experience for users in different regions. <br/><br/>With Wallet X, users can perform a wide range of financial activities conveniently and securely. They can store multiple payment methods, such as credit cards, bank accounts, or digital wallets, in one place, making it easier to manage their finances. Wallet X also supports various transaction types, including peer-to-peer transfers, bill payments, merchant payments, and online shopping, providing users with flexibility and convenience in their daily financial transactions.<br/> <br/>In addition to transactional features, Wallet X also offers tools and resources to enhance users' financial lives. This may include budgeting and expense tracking features, savings and investment options, financial education resources, and personalized recommendations based on user spending patterns and financial goals. By empowering users with these capabilities, Wallet X aims to help them make informed financial decisions and improve their overall financial well-being. <br/><br/>The microservice architecture of Wallet X allows for easy integration with existing systems and technologies, making it a flexible solution for businesses and organizations. This architecture enables modular development and deployment, allowing for rapid updates and enhancements. Wallet X can be customized and branded according to the requirements of businesses, enabling them to create a unique and tailored user experience. <br/><br/>Overall, Wallet X is a versatile e-wallet solution that combines localization, convenience, and financial empowerment. Its features and architecture make it suitable for a wide range of users and markets, providing them with a seamless and engaging financial experience while supporting local commerce and improving financial outcomes.",
		},
		{
			id: 5,
			name: 'Business Process Management',
			description: [
				'Business Process Management (BPM) refers to the discipline of managing and optimizing business processes to improve efficiency, productivity, and overall performance within an organization. Digi BPM is a solution that leverages smart automation and artificial intelligence to streamline and automate various business processes, resulting in significant time savings. ',
				"Digi BPM offers a comprehensive set of features and functionalities to address different aspects of business automation. One key area is workflow automation, where manual tasks and processes are digitized and automated, reducing the need for human intervention and minimizing errors. This allows employees to focus on more strategic and value-added activities, ultimately increasing productivity. <br/><br/>In addition to workflow automation, Digi BPM also caters to IT operations automation. It provides tools and capabilities to automate routine IT tasks, such as system monitoring, software updates, and data backups. By automating these operations, organizations can improve system availability, reduce downtime, and enhance overall IT efficiency. <br/><br/>Another specific use case of Digi BPM is lending automation. The solution leverages AI-enabled algorithms and analytics to streamline lending processes, such as loan application processing, credit scoring, and loan approval. By automating these processes, organizations can accelerate loan processing times, reduce manual errors, and enhance customer experience.<br/> <br/> <span style=' text-align: center; font-size: 1.5em; font-weight: 600;'><center>'APIMS offers centralized control and management capabilities.'</center></span> <br/>Leading financial institutions (BFI's) are increasingly adopting Digi BPM to gain a competitive edge and drive operational excellence. By leveraging smart automation and AI, these organizations can achieve significant time savings, improve process efficiency, and deliver better customer experiences. The solution allows BFIs to automate complex and repetitive tasks, minimize operational costs, and allocate resources more strategically. <br/><br/>Overall, Digi BPM offers a comprehensive solution for business process automation, covering workflows, IT operations, and lending automation. By adopting this AI-enabled solution, organizations can save valuable time, improve operational efficiency, and enhance their competitive position in the market.",
			],
			// description:
			// 	"Business Process Management (BPM) refers to the discipline of managing and optimizing business processes to improve efficiency, productivity, and overall performance within an organization. Digi BPM is a solution that leverages smart automation and artificial intelligence to streamline and automate various business processes, resulting in significant time savings. <br/><br/>Digi BPM offers a comprehensive set of features and functionalities to address different aspects of business automation. One key area is workflow automation, where manual tasks and processes are digitized and automated, reducing the need for human intervention and minimizing errors. This allows employees to focus on more strategic and value-added activities, ultimately increasing productivity. <br/><br/>In addition to workflow automation, Digi BPM also caters to IT operations automation. It provides tools and capabilities to automate routine IT tasks, such as system monitoring, software updates, and data backups. By automating these operations, organizations can improve system availability, reduce downtime, and enhance overall IT efficiency. <br/><br/>Another specific use case of Digi BPM is lending automation. The solution leverages AI-enabled algorithms and analytics to streamline lending processes, such as loan application processing, credit scoring, and loan approval. By automating these processes, organizations can accelerate loan processing times, reduce manual errors, and enhance customer experience. <br/><br/>Leading financial institutions (BFI's) are increasingly adopting Digi BPM to gain a competitive edge and drive operational excellence. By leveraging smart automation and AI, these organizations can achieve significant time savings, improve process efficiency, and deliver better customer experiences. The solution allows BFIs to automate complex and repetitive tasks, minimize operational costs, and allocate resources more strategically. <br/><br/>Overall, Digi BPM offers a comprehensive solution for business process automation, covering workflows, IT operations, and lending automation. By adopting this AI-enabled solution, organizations can save valuable time, improve operational efficiency, and enhance their competitive position in the market.",
		},
	],
};

// const content = service.map(({ id, name, description }) => {
// 	return (
// 		<div key={id} className="content">
// 			<AiFillDatabase className="c-icon" />
// 			<div>
// 				<h2 className="title">{name}</h2>
// 				<p className="description">{description}</p>
// 			</div>
// 		</div>
// 	);
// });
