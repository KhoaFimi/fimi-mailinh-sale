import Image from 'next/image'
import Link from 'next/link'
import { FaClock, FaHome, FaPhone } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const socialBrand = [
	{
		link: 'https://www.facebook.com/fimipubs',
		image: '/brand/facebook.png'
	},
	{
		link: 'https://www.youtube.com/channel/UChE5adX4GQgsFahptRJWbbg',
		image: '/brand/youtube.png'
	},
	{
		link: 'https://www.tiktok.com/@fimitech?_t=8iXQNh23a8P&_r=1',
		image: '/brand/tik-tok.png'
	}
] satisfies {
	link: string
	image: string
}[]

const Footer = () => {
	return (
		<div className='mt-4 flex w-full flex-col'>
			<div className='flex-1 bg-gradient-to-tr from-primary from-30% to-[#e81e25]'>
				<div className='relative flex flex-col gap-4 p-2'>
					<Image
						src='/logo-negative.png'
						alt='logo'
						width={3336}
						height={1144}
						className='w-24'
					/>
					<p className='text-sm font-bold uppercase text-white'>
						Công Ty TNHH Công Nghệ FIMI
					</p>
					<div className='absolute right-4 top-4 flex gap-4'>
						{socialBrand.map(brand => (
							<Link
								href={brand.link}
								key={brand.image}
							>
								<Image
									src={brand.image}
									alt={brand.image}
									width={512}
									height={512}
									className='size-8'
								/>
							</Link>
						))}
					</div>
					<div className='flex items-center space-x-2'>
						<div className='rounded-full bg-white p-1.5 shadow-md'>
							<FaHome className='size-4 text-primary' />
						</div>
						<p className='text-xs font-semibold text-white'>
							Tầng 1, Tòa Nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4, TP.HCM.
						</p>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center space-x-2'>
							<div className='rounded-full bg-white p-1.5 shadow-md'>
								<IoMail className='size-4 text-primary' />
							</div>
							<p className='text-xs font-semibold text-white'>
								admin@fimi.tech
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<div className='rounded-full bg-white p-1.5 shadow-md'>
								<FaPhone className='size-4 text-primary' />
							</div>
							<p className='text-xs font-semibold text-white'>0393 017 031</p>
						</div>
					</div>

					<div className='flex items-center space-x-2'>
						<div className='rounded-full bg-white p-1.5 shadow-md'>
							<FaClock className='size-4 text-primary' />
						</div>
						<p className='text-xs font-semibold text-white'>
							8:30 - 17:30 | Thứ 2 - Thứ 6
						</p>
					</div>
				</div>
			</div>
			<div className='p-2 text-xs font-bold tracking-tight'>
				<p className='text-foreground/50'>
					Copyright © FIMI TECH Co., Ltd, all right reserved.
				</p>
			</div>
		</div>
	)
}

export default Footer
