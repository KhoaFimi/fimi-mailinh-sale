import Footer from '@/app/(main)/_components/footer'
import Products from '@/app/(main)/_components/products'

type SearchParams = Promise<{ orderId: string }>

const ProductsPage = async ({
	searchParams
}: {
	searchParams: SearchParams
}) => {
	const { orderId } = await searchParams

	return (
		<div>
			<Products orderId={orderId} />
			<Footer />
		</div>
	)
}

export default ProductsPage
