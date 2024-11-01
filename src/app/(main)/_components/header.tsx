import Image from 'next/image'

const Header = () => {
	return (
		<header
			className={`
     sticky inset-x-0 top-0 z-50 h-fit select-none bg-background shadow-md
   `}
		>
			<div className='flex items-center justify-center space-x-4 px-2 py-2'>
				<Image
					src='/logo.png'
					alt='logo'
					width={3148}
					height={1367}
					className='w-20'
				/>
				<div
					className={`h-[35px] w-[3px] bg-gradient-to-br from-primary to-primary/50`}
				/>
				<Image
					src='/logo-mailinh.png'
					alt='logo-mailinh'
					width={712}
					height={215}
					className='w-28'
				/>
			</div>
		</header>
	)
}

export default Header
