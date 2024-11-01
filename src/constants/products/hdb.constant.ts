import { CardType } from '@/types'

export const hdb = (code: string) =>
	[
		{
			id: 'hdbvjp',
			name: 'HD Bank - Vietjet',
			group: 'hdb',
			link: `https://hdbank.page.link/?link=https://hdbank.page.link/?channel%3Ddop%26productcode%3DDOPVJ%26utm_source%3DFIMI%26utm_campaign%3Dtest%26utm_channel%3DDOP%26utm_ref%3D${code}&apn=com.vnpay.hdbank&isi=1461658565&ibi=com.vnpay.HDBank`,
			priority: 3,
			condition: {
				age: 18,
				cities: 'all',
				demands: 'Tích dặm bay',
				income: 7000000
			},
			info: {
				creditLimt: '100',
				image: '/credit-card/hdb-vietjet-card.png',
				specialFeatures: 'Tặng 5% khi mua vé máy bay Vietjet Air.'
			}
		},
		{
			id: 'hdb4in1',
			name: 'HD Bank - 4in1',
			group: 'hdb',
			link: `https://hdbank.page.link/?link=https://hdbank.page.link/?channel%3Ddop%26productcode%3DDOPVJ%26utm_source%3DFIMI%26utm_campaign%3Dtest%26utm_channel%3DDOP%26utm_ref%3D${code}&apn=com.vnpay.hdbank&isi=1461658565&ibi=com.vnpay.HDBank`,
			priority: 3,
			condition: {
				age: 18,
				cities: 'all',
				demands: 'Tích điểm',
				income: 5000000
			},
			info: {
				creditLimt: '50',
				image: '/credit-card/hdb-4in1-card.png',
				specialFeatures:
					'Tích điểm thưởng SkyJoy cho mỗi giao dịch nội địa hợp lệ'
			}
		}
	] satisfies CardType[]
