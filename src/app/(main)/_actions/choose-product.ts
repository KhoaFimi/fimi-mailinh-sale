'use server'
import { formatInTimeZone } from 'date-fns-tz'
import { redirect } from 'next/navigation'

import { products } from '@/constants/products/products.constant'
import { getSheets } from '@/lib/server/google-sheets'

export const chooseProduct = async ({
	orderId,
	productId
}: {
	orderId: string
	productId: string
}) => {
	const sheets = await getSheets()

	const {
		data: { values: data }
	} = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range: process.env.SHEET_1
	})

	if (!data) throw Error('Not found')

	const rangeToUpdate = data.findIndex(row => row[0] === orderId)

	if (rangeToUpdate === -1) throw Error('Not found')

	const timeStamp = formatInTimeZone(new Date(), 'Asia/Ho_Chi_Minh', 'LLL d,y')

	await sheets.spreadsheets.values.batchUpdate({
		spreadsheetId: process.env.SHEET_ID,
		requestBody: {
			valueInputOption: 'RAW',
			data: [
				{
					range: `${process.env.SHEET_1}!B${rangeToUpdate + 1}`,
					values: [[timeStamp]]
				},
				{
					range: `${process.env.SHEET_1}!D${rangeToUpdate + 1}`,
					values: [[productId.includes('vpbankcc') ? 'vpbankcc' : productId]]
				}
			]
		}
	})

	const productList = products(orderId)

	const productIndex = productList.findIndex(
		product => product.id === productId
	)

	const { link } = productList[productIndex]

	redirect(link)
}
