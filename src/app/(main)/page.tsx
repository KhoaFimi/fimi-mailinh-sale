'use client'

import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTimeout } from 'usehooks-ts'

const HomePage = () => {
	const router = useRouter()

	useTimeout(() => {
		router.push('/credit-card/common-info')
	}, 1500)

	return (
		<div className='flex h-full w-full select-none items-center justify-center'>
			<div className='flex h-fit flex-col items-center justify-center space-y-6'>
				<Image
					src='/logo.png'
					width={2454}
					height={1066}
					alt='logo'
					className='w-52'
				/>
				<div className='flex items-center justify-center space-x-2'>
					<Loader2 className='size-5 animate-spin text-primary' />
					<p className='text-base text-primary/70'>
						Vui lòng chờ trong giây lát ...
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomePage
