import React from 'react';
import { Link } from 'react-router-dom';
import pic from "../../../assets/img/top11.png"
const Home = () => {
    return (
        <div className=''>
            {/* 1 */}
            <div className='text-center mt-20 mb-10'>
                    
<h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-yellow-400 md:text-5xl lg:text-5xl ">Your Career in Web Development Starts Here</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Our full stack curriculum is free and supported by a passionate open source community.</p>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Last Curriculum Update: 1 day ago</p>
<Link to="/courses" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</Link>

            </div>
            {/* 2 */}
            <div className='w-full flex justify-center'>
                <img src={pic} alt="" />
            </div>
            {/* 3 */}
            <div className='grid lg:ml-64 mt-24 ml-32  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3'>
                 <div className='mb-10'>
                    <img src="https://www.theodinproject.com/assets/img-learn-7f69020a563b2631283ca49bfc9a8898cda89673b184fd5becc13afec16cc784.svg" alt="" />
                    <div>
                        <h1 className='text-2xl font-bold mt-4 dark:text-gray-300'>Learn</h1>
                        <p className='w-36 dark:text-gray-300'>Learn from a curriculum with the best curated online tutorials, blogs, and courses.</p>
                    </div>
                 </div>
                 <div className='mb-10'>
                    <img src="https://www.theodinproject.com/assets/img-build-4e9c3482971d09bc1e15535d71deb68e12462dacc4442d6a6a997df01330287a.svg" alt="" />
                    <div>
                        <h1 className='text-2xl font-bold mt-4 dark:text-gray-300'>Build</h1>
                        <p className='w-36 dark:text-gray-300'>Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.</p>
                    </div>
                 </div>
                 <div className='mb-10'>
                    <img src="https://www.theodinproject.com/assets/img-connect-3d9999fbdc6a4d65329f0add107893b63ce5a277064631419aa6fcbb16893195.svg" alt="" />
                    <div>
                        <h1 className='text-2xl font-bold mt-4 dark:text-gray-300'>Connect</h1>
                        <p className='w-36 dark:text-gray-300'>You're not alone. Learn and get help from our friendly community of beginner and experienced developers</p>
                    </div>
                 </div>
            </div>
            {/* 4 */}
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <h1 className='text-center text-yellow-400 text-4xl font-bold'>Explore Courses</h1>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<Link rel="noopener noreferrer" to="/course/1" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Build Web Apps with React & Firebase</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p>Learn React from the ground up to make dynamic websites (includes Context, Hooks, Reducers, Routing, Auth, Databases.</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" to="/course/2" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxPW995UB1hSxk2Am-wv47AEjREyWLaeC0A&usqp=CAU" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">CSS - The Complete Guide 2022</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p>CSS - The Complete Guide 2022",
        "short_dis":"Learn CSS htmlFor the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has to know CSS..</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer"to="/course/3" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Lvl1ZNKy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ph7yc1i1vqqgwpxegw5.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Complete Node.js Developer Course</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p>Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!"</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" to="/course/4" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="http://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/HTML55.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Learn HTML5 Programming From Scratch</h3>
					<span className="text-xs dark:text-gray-400">January 24, 2021</span>
					<p>A Complete HTML5 Programming Course htmlFor Beginners</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" to="/course/5" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Complete JavaScript Course 2022</h3>
					<span className="text-xs dark:text-gray-400">January 25, 2021</span>
					<p>The modern JavaScript course htmlFor everyone! Master JavaScript with projects, challenges and theory. Many courses in one!</p>
				</div>
			</Link>
			<Link rel="noopener noreferrer" to="/course/6" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://stackpython.co/media/course/python-programming-basic.png" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</h3>
					<span className="text-xs dark:text-gray-400">January 26, 2021</span>
					<p>Mei ex aliquid eleifend htmlForensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</Link>
		</div>
		
	</div>
</section>
        </div>
    );
};

export default Home;