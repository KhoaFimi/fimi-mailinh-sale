import { z } from 'zod'

import { cities } from '@/constants/cities.constant'

const cityList = cities.map(city => city.value)

export const incomeAndDemandSchema = z.object({
	city: z.enum([cityList[0], ...cityList], {
		message: 'Vui lòng chọn khu vực sinh sống'
	}),
	income: z.string({ required_error: 'Vui lòng chọn mức thu nhập của bạn' }),
	demands: z.array(z.string()).refine(value => value.some(item => item), {
		message: 'Hãy chọn ít nhất 1 nhu cầu'
	}),
	otherDemand: z.string().optional()
})

export type IncomeAndDemandSchema = z.infer<typeof incomeAndDemandSchema>
