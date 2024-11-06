import Image from 'next/image'

import Footer from '@/app/(main)/_components/footer'
import CommonInfoForm from '@/app/(main)/_components/form/common-info-form'
import SecurityPolicy from '@/app/(main)/_components/security-policy'
import TermPolicy from '@/app/(main)/_components/term-policy'
import UserPolicy from '@/app/(main)/_components/user-policy'

const CommonInfoPage = () => {
	return (
		<div className={`relative flex w-full flex-col items-center space-y-6`}>
			<Image
				src='/fill.png'
				alt='fill'
				width={6642}
				height={8802}
				className={`absolute right-6 top-4 z-40 w-20`}
			/>

			<CommonInfoForm />
			<div className={`flex w-full flex-col items-center justify-start px-6`}>
				<SecurityPolicy />
				<UserPolicy />
				<TermPolicy />
			</div>
			<Footer />
		</div>
	)
}

export default CommonInfoPage
