import '@/app/globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import QueryProvider from '@/providers/client.provider'

export const metadata: Metadata = {
	title: 'FIMI x Mai Linh',
	description: 'Mở thẻ'
}

const font = Montserrat({
	subsets: ['latin', 'vietnamese']
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={`
      ${font.className}

      antialiased
    `}
			>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}

export default RootLayout
