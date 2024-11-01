import Products from '@/app/(main)/_components/products'

type SearchParams = Promise<{ orderId: string }>

const ProductsPage = async ({
	searchParams
}: {
	searchParams: SearchParams
}) => {
	const { orderId } = await searchParams

	return <Products orderId={orderId} />
}

export default ProductsPage
