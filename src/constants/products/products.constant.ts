import { hdb } from '@/constants/products/hdb.constant'
import { tbpevo } from '@/constants/products/tpbevo.constant'
import { vib } from '@/constants/products/vib.constant'
import { vpbank } from '@/constants/products/vpbank.constant'

export const products = (uid: string) => [
	...hdb(uid),
	...tbpevo(uid),
	...vib(uid),
	...vpbank(uid)
]
