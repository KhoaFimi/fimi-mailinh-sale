import { z } from 'zod'

import { cities } from '@/constants/cities.constant'

const cityList = cities.map(city => city.value)

export const commonInfoSchema = z.object({
	publisherCode: z.string().optional(),
	fullname: z.string({ required_error: 'Vui lòng nhập họ và tên' }),
	phone: z.string({ required_error: 'Vui lòng nhập số điện thoại' }),
	email: z.string({ required_error: 'Vui lòng nhập email' }),
	city: z.enum([cityList[0], ...cityList], {
		message: 'Vui lòng chọn khu vực sinh sống'
	}),
	tnc: z.boolean().default(false)
})

export type CommonInfoSchema = z.infer<typeof commonInfoSchema>
