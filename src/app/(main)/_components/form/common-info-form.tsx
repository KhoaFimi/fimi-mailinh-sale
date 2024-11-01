'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { HandCoins, Mail, Phone, User } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { createOrder } from '@/app/(main)/_actions/add-common-info'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel
} from '@/components/ui/form'
import FormCombobox from '@/components/ui/form-combobox'
import { Input } from '@/components/ui/input'
import { cities } from '@/constants/cities.constant'
import {
	CommonInfoSchema,
	commonInfoSchema
} from '@/schemas/common-info.schema'

const CommonInfoForm = () => {
	const form = useForm<CommonInfoSchema>({
		resolver: zodResolver(commonInfoSchema),
		defaultValues: {
			publisherCode: '',
			fullname: '',
			email: '',
			phone: '',
			city: '',
			tnc: false
		}
	})

	const { mutate, isPending } = useMutation({
		mutationFn: async (values: CommonInfoSchema) => {
			await createOrder({
				...values,
				publisherCode: !values.publisherCode ? 'MALI' : values.publisherCode
			})
		}
	})

	return (
		<div className='flex w-full justify-center'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(values => mutate(values))}
					className='w-full px-6'
				>
					<div className='space-y-6'>
						<FormField
							name='publisherCode'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<div className='flex items-end space-x-2 text-foreground/70'>
										<HandCoins className='size-5' />
										<FormLabel>Mã giới thiệu</FormLabel>
									</div>
									<FormControl>
										<Input
											placeholder='FIMIxxxxx'
											className='focus-visible:outline-none focus-visible:ring-0'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name='fullname'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<div className='flex items-end space-x-2 text-foreground/70'>
										<User className='size-5' />
										<FormLabel>Họ và tên</FormLabel>
									</div>
									<FormControl>
										<Input
											placeholder='Nguyễn Văn A'
											className='focus-visible:outline-none focus-visible:ring-0'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name='email'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<div className='flex items-end space-x-2 text-foreground/70'>
										<Mail className='size-5' />
										<FormLabel>Email</FormLabel>
									</div>
									<FormControl>
										<Input
											placeholder='john.doe@gmail.com'
											className='focus-visible:outline-none focus-visible:ring-0'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name='phone'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<div className='flex items-end space-x-2 text-foreground/70'>
										<Phone className='size-5' />
										<FormLabel>Số điện thoại</FormLabel>
									</div>
									<FormControl>
										<Input
											placeholder='0915xxxx00'
											className='focus-visible:outline-none focus-visible:ring-0'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormCombobox
							name='city'
							label='Khu vực'
							isLoading={isPending}
							control={form.control}
							form={form}
							initalData='Thành phố'
							items={cities}
							isMessage
						/>
						<FormField
							name='tnc'
							control={form.control}
							render={({ field }) => (
								<FormItem
									className={`
           flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4
           shadow
         `}
								>
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className='space-y-1 leading-none'>
										<FormLabel className='text-sm text-foreground/70'>
											Bằng việc xác nhận, bạn đồng ý với
										</FormLabel>
									</div>
								</FormItem>
							)}
						/>
						<Button
							type='submit'
							disabled={!form.getFieldState('tnc').isDirty || isPending}
							className='w-full'
						>
							Tiếp tục
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default CommonInfoForm
