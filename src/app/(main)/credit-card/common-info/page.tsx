import CommonInfoForm from '@/app/(main)/_components/form/common-info-form'
import SecurityPolicy from '@/app/(main)/_components/security-policy'
import TermPolicy from '@/app/(main)/_components/term-policy'
import UserPolicy from '@/app/(main)/_components/user-policy'

const CommonInfoPage = () => {
	return (
		<div className='flex flex-col items-center space-y-6 px-2'>
			<h2
				className={`
      h-fit bg-gradient-to-r from-primary to-red-700 bg-clip-text text-2xl
      font-bold uppercase text-transparent
    `}
			>
				Thông tin cơ bản
			</h2>
			<CommonInfoForm />
			<div className='w-full flex-col px-6'>
				<SecurityPolicy />
				<UserPolicy />
				<TermPolicy />
			</div>
		</div>
	)
}

export default CommonInfoPage
