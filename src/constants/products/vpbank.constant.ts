import { CardType } from '@/types'

export const vpbank = (code: string) =>
	[
		{
			id: 'vpbankcc-stepup',
			name: 'Vpbank - StepUp',
			group: 'vp',
			link: `https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
			priority: 1,
			condition: {
				age: 18,
				cities: 'all',
				demands: 'Hoàn tiền',
				income: 7000000
			},
			info: {
				creditLimt: '100',
				specialFeatures: 'Hoàn tiền đến 15% giá trị giao dịch',
				image: '/credit-card/vp-prime-card.png'
			}
		},
		{
			id: 'vpbankcc-lady',
			name: 'Vpbank - Lady',
			group: 'vp',
			link: `https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
			priority: 1,
			condition: {
				age: 18,
				cities: 'all',
				demands: 'Hoàn tiền',
				income: 7000000
			},
			info: {
				image: '/credit-card/vp-lady-card.png',
				specialFeatures: 'Hoàn tiền đến 15% giá trị giao dịch',
				creditLimt: '100'
			}
		},
		{
			id: 'vpbankcc-genz',
			name: 'Vpbank - GenZ',
			group: 'vp',
			link: `https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
			priority: 1,
			condition: {
				age: 18,
				cities: 'all',
				demands: 'Hoàn tiền',
				income: 4500000
			},
			info: {
				creditLimt: '100',
				specialFeatures: ' Hoàn tiền đến 10% giá trị giao dịch',
				image: '/credit-card/vp-genz-card.png'
			}
		},
		{
			id: 'vpbankcc-MC2',
			name: 'Vpbank - MC2',
			group: 'vp',
			link: `https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
			priority: 1,
			condition: {
				age: 18,
				demands: 'Tích điểm',
				cities: 'all',
				income: 4500000
			},
			info: {
				creditLimt: '100',
				image: '/credit-card/vp-mc2-card.png',
				specialFeatures: 'Tích lũy điểm thưởng đổi quà với các chi tiêu hợp lệ.'
			}
		},
		{
			id: 'vpbankcc-travel',
			name: 'Vpbank - Travel',
			group: 'vp',
			link: `https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
			priority: 1,
			condition: {
				age: 18,
				demands: 'Tích dặm bay',
				cities: 'all',
				income: 4500000
			},
			info: {
				specialFeatures: 'Hoàn tiền đến 10% giá trị giao dịch.',
				image: '/credit-card/vp-travel-card.png',
				creditLimt: '100'
			}
		}
	] satisfies CardType[]
