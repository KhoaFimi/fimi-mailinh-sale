'use server'

import { redirect } from 'next/navigation'

import { genId } from '@/lib/server/gen-id'
import { getSheets } from '@/lib/server/google-sheets'
import { CommonInfoSchema } from '@/schemas/common-info.schema'

export const createOrder = async (commonInfoSchema: CommonInfoSchema) => {
	const sheets = await getSheets()

	const orderId = genId()

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.SHEET_ID,
		range: `${process.env.SHEET_NAME}!A2:L1`,
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					`'${orderId}`,
					'',
					commonInfoSchema.publisherCode,
					'',
					'',
					commonInfoSchema.fullname,
					'',
					`'${commonInfoSchema.phone}`,
					commonInfoSchema.email,
					commonInfoSchema.city
				]
			]
		}
	})

	redirect(`/credit-card/products?orderId=${orderId}`)
}
