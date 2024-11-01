'use client'

import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { FC, useState } from 'react'

import { chooseProduct } from '@/app/(main)/_actions/choose-product'
import { Button } from '@/components/ui/button'
import { products } from '@/constants/products/products.constant'
import { cn } from '@/lib/utils'
import { CardType } from '@/types'

interface ProductsProps {
	orderId: string
}

const Products: FC<ProductsProps> = ({ orderId }) => {
	const [productList, _setProductList] = useState(products(orderId))

	return (
		<div className={`flex flex-col items-center space-y-4 pb-4`}>
			<h2
				className={`
      w-fit bg-gradient-to-tr from-primary from-50% to-primary/50 bg-clip-text
      text-center text-2xl font-bold uppercase text-transparent
    `}
			>
				Sản phẩm của chúng tôi
			</h2>
			{/* 85% section */}
			<section
				className={`
     flex flex-col items-center gap-2 rounded-lg bg-primary px-1 py-4
   `}
			>
				<h4 className='text-base font-bold uppercase text-white'>
					85% người dùng chọn dòng thẻ này
				</h4>
				<div className='flex flex-col space-y-3 px-2'>
					{productList
						.filter(product => product.priority === 1)
						.map(product => (
							<Product
								key={product.id}
								orderId={orderId}
								{...product}
							/>
						))}
				</div>
			</section>
			{/* 50% section */}
			<section
				className={`
     flex flex-col items-center gap-2 rounded-lg bg-primary px-1 py-4
   `}
			>
				<h4 className='text-base font-bold uppercase text-white'>
					50% người dùng chọn dòng thẻ này
				</h4>
				<div className='flex flex-col space-y-3 px-2'>
					{productList
						.filter(product => product.priority === 2)
						.map(product => (
							<Product
								key={product.id}
								orderId={orderId}
								{...product}
							/>
						))}
				</div>
			</section>
			{/* 30% section */}
			<section
				className={`
     flex flex-col items-center gap-2 rounded-lg bg-primary px-1 py-4
   `}
			>
				<h4 className='text-base font-bold uppercase text-white'>
					30% người dùng chọn dòng thẻ này
				</h4>
				<div className='flex flex-col space-y-3 px-2'>
					{productList
						.filter(product => product.priority === 3)
						.map(product => (
							<Product
								key={product.id}
								orderId={orderId}
								{...product}
							/>
						))}
				</div>
			</section>
			{/* 10% section */}
			<section
				className={`
      flex flex-col items-center gap-2 rounded-lg
      bg-primary px-1 py-4
    `}
			>
				<h4 className='text-base font-bold uppercase text-white'>
					10% người dùng chọn dòng thẻ này
				</h4>
				<div className='flex flex-col space-y-3 px-2'>
					{productList
						.filter(product => product.priority === 4)
						.map(product => (
							<Product
								key={product.id}
								orderId={orderId}
								{...product}
							/>
						))}
				</div>
			</section>
		</div>
	)
}

const Product: FC<CardType & ProductsProps> = ({ orderId, ...product }) => {
	const { mutate, isPending } = useMutation({
		mutationFn: async ({
			orderId,
			productId
		}: {
			orderId: string
			productId: string
		}) => await chooseProduct({ orderId, productId })
	})

	return (
		<div
			key={product.id}
			className={`
     flex h-fit w-[22rem] gap-2 rounded-md border border-foreground/30
     bg-background p-2 shadow-md
   `}
		>
			<div className='relative flex h-48 items-center justify-center'>
				<Image
					src='/hot.png'
					width={703}
					height={303}
					alt='hot'
					className={cn(
						'absolute -right-7 top-0.5 z-50 w-12 -rotate-[24deg] animate-pulse',
						{ ['hidden']: product.priority > 1 }
					)}
				/>
				<Image
					src={product.info.image}
					width={397}
					height={629}
					alt={product.info.image}
					className={`
       aspect-[2/3] h-40 w-28 cursor-pointer shadow-md transition-all
       duration-300 ease-out

       hover:scale-105 hover:shadow-xl
     `}
				/>
			</div>
			<div className='flex flex-1 flex-col gap-2'>
				<div
					className={cn(
						`flex flex-1 flex-col justify-between rounded-md transparent p-2 text-sm`
					)}
				>
					<p className='font-bold'>
						Tên thẻ: <span className='font-normal'>{product.name}</span>
					</p>
					<p className='font-bold'>
						Hạn mức:{' '}
						<span className='font-normal'>
							lên đến {product.info.creditLimt} triệu đồng
						</span>
					</p>
					<p className='font-bold'>
						Tính năng nổi bật:{' '}
						<span className='font-normal'>{product.info.specialFeatures}</span>
					</p>
				</div>
				<div className='flex w-full items-center justify-center'>
					<Button
						disabled={isPending}
						className={`
        rounded-full bg-gradient-to-tr from-primary from-30% to-[#e81e25] px-4
      `}
						onClick={() => mutate({ productId: product.id, orderId })}
					>
						Mở thẻ ngay
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Products
