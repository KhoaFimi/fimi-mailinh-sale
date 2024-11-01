import Footer from '@/app/(main)/_components/footer'
import CommonInfoForm from '@/app/(main)/_components/form/common-info-form'
import SecurityPolicy from '@/app/(main)/_components/security-policy'
import TermPolicy from '@/app/(main)/_components/term-policy'
import UserPolicy from '@/app/(main)/_components/user-policy'

const CommonInfoPage = () => {
	return (
		<div className='flex w-full flex-col items-center space-y-6'>
			<h2
				className={`
      h-fit bg-gradient-to-r from-primary to-red-700 bg-clip-text text-2xl
      font-bold uppercase text-transparent
    `}
			>
				Thông tin cơ bản
			</h2>
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
