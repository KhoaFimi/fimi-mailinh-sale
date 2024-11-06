import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className='flex h-screen items-center justify-center'>
			<div
				className={`
      h-full w-full overflow-y-auto bg-gray-200/20

      sm:w-[400px] sm:rounded-xl sm:border sm:border-foreground/20 sm:shadow-md
    `}
			>
				{children}
			</div>
		</main>
	)
}

export default MainLayout
