export type ComboboxItemType = {
	value: string
	label: string
}

export type CardType = {
	id: string
	name: string
	group: 'vp' | 'hdb' | 'vib' | 'tp'
	priority: number
	link: string
	condition: {
		age: number
		cities: 'all' | string[]
		income: number
		demands:
			| 'Hoàn tiền'
			| 'Tích điểm'
			| 'Tích dặm bay'
			| 'Giao dịch ngoại tệ'
			| 'Miễn lãi'
	}
	info: {
		creditLimt: string
		specialFeatures: string
		image: string
	}
}
