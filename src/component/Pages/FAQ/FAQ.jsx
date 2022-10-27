import React from 'react';

const FAQ = () => {
    return (
        <div>
           <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
	
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">Who is the Code-Verse for? </h3>
				<p className="mt-1 dark:text-gray-400">Code-Verse is for absolute beginners in the world of web development and those who have tried other resources without success. In reality, The Odin Project is for anyone who wants to work as a web developer, do freelancing work, build a startup, or just hack together a homepage for yourself. All the tools you need are here.</p>
			</div>
			<div>
				<h3 className="font-semibold">Which technologies can one expect to learn from Code-Verse?</h3>
				<p className="mt-1 dark:text-gray-400">All students are initially enrolled into the Foundations Course. This will give you a chance to explore several of the languages and technologies you'll need to know on your journey to becoming a web developer. Foundations introduces HTML, CSS, JavaScript, Git and more. We've also created mini-projects that give you a chance to test your new knowledge by building your own applications and websites! Once Foundations is complete, students have two paths to choose from: Fullstack Ruby on Rails and Fullstack JavaScript</p>
			</div>
			<div>
				<h3 className="font-semibold">Will I get a certificate on completion of the course?
</h3>
				<p className="mt-1 dark:text-gray-400">We provide a certificate for course completion. Employers will be much more impressed with your amazing personal portfolio of projects, many of which you'll hopefully have built with inspiration from The Odin Project.</p>
			</div>
			<div>
				<h3 className="font-semibold">How can I get in touch?</h3>
				<p className="mt-1 dark:text-gray-400">If you have questions about The Odin Project itself, feel free to contact us. There is also a friendly Odin community in our Discord chat rooms.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;