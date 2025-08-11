import React, { memo } from 'react'
import { FiDownload } from 'react-icons/fi'

// components
import Social from '@/components/Social'
import Photo from '@/components/Photo'

const TextSection = () => (
	<div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">A Fullstack Developer</span>
		<h1 className="h1 mb-6">
            Hello!
			<br />
            <span className="text-accent font-bold">I'm Alhassan Alfarran</span>
		</h1>
		<div className="flex flex-col xl:flex-row items-center gap-8">
			<SocialLinks />
		</div>
	</div>
)



const SocialLinks = () => (
	<div className="mb-8 xl:mb-0">
		<Social
			containerStyles="flex gap-6"
			iconStyles="w-9 h-9 border border-accent bg-transparent text-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary dark:hover:bg-accent dark:hover:text-primary hover:transition-all duration-500"
		/>
	</div>
)

const PhotoSection = () => (
	<div className="order-1 xl:order-none mb-8 xl:mb-0">
		<Photo />
	</div>
)

const Home = () => {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					<TextSection />
					<PhotoSection />
				</div>
			</div>
		</section>
	)
}

export default memo(Home)
