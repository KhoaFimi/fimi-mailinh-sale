import { FC, PropsWithChildren } from 'react'

import Header from '@/app/(main)/_components/header'

const CreditCardLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className='h-full'>
			<Header />
			<div className='mt-8'>{children}</div>
		</main>
	)
}

export default CreditCardLayout
