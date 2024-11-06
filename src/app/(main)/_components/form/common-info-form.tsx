'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { HandCoins, Mail, Phone, User } from 'lucide-react'
import { Lora } from 'next/font/google'
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
import { cn } from '@/lib/utils'
import {
	CommonInfoSchema,
	commonInfoSchema
} from '@/schemas/common-info.schema'

const font = Lora({
	subsets: ['vietnamese', 'latin']
})

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
		<div className='z-30 flex w-full justify-center'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(values => mutate(values))}
					className='w-full px-3'
				>
					<div className='space-y-2'>
						<div className={`relative rounded-2xl pt-8`}>
							<h2
								className={cn(
									`
           absolute -top-2 left-3 skew-x-2 bg-gradient-to-r from-[#e65524]
           to-[#f2af1c] bg-clip-text text-xl font-bold uppercase tracking-tight
           text-transparent drop-shadow-2xl
         `,
									font.className
								)}
							>
								Đăng ký mở thẻ ngay
							</h2>
							<div
								className={`
          flex flex-col space-y-6 rounded-2xl bg-gradient-to-tr from-primary
          from-30% to-[#e81e25] px-4 py-6 shadow-lg
        `}
							>
								<FormField
									name='publisherCode'
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<div
												className={`flex items-end space-x-2 text-foreground/70 text-white`}
											>
												<HandCoins className='size-5' />
												<FormLabel className='font-semibold'>
													Mã giới thiệu
												</FormLabel>
											</div>
											<FormControl>
												<Input
													placeholder='FIMIxxxxx'
													className={`
               bg-background caret-primary

               focus-visible:outline-none focus-visible:ring-0
             `}
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
											<div
												className={`flex items-end space-x-2 text-foreground/70 text-white`}
											>
												<User className='size-5' />
												<FormLabel className='font-semibold'>
													Họ và tên
												</FormLabel>
											</div>
											<FormControl>
												<Input
													placeholder='Nguyễn Văn A'
													className={`
               bg-background caret-primary

               focus-visible:outline-none focus-visible:ring-0
             `}
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
											<div
												className={`flex items-end space-x-2 text-foreground/70 text-white`}
											>
												<Mail className='size-5' />
												<FormLabel className='font-semibold'>Email</FormLabel>
											</div>
											<FormControl>
												<Input
													placeholder='john.doe@gmail.com'
													className={`
               bg-background caret-primary

               focus-visible:outline-none focus-visible:ring-0
             `}
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
											<div
												className={`flex items-end space-x-2 text-foreground/70 text-white`}
											>
												<Phone className='size-5' />
												<FormLabel className='font-semibold'>
													Số điện thoại
												</FormLabel>
											</div>
											<FormControl>
												<Input
													placeholder='0915xxxx00'
													className={`
               bg-background caret-primary

               focus-visible:outline-none focus-visible:ring-0
             `}
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
							</div>
						</div>
						<div className='flex w-full items-center justify-center'>
							<FormField
								name='tnc'
								control={form.control}
								render={({ field }) => (
									<FormItem
										className={`flex flex-row items-start space-x-3 space-y-0 p-4`}
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
						</div>
						<div className='flex w-full items-center justify-center'>
							<Button
								type='submit'
								disabled={!form.getFieldState('tnc').isDirty || isPending}
								className={`
          rounded-full bg-gradient-to-tr from-primary from-30% to-[#e81e25]
          px-12 py-6 text-base font-semibold uppercase transition-colors
          duration-200 ease-out

          active:form-10%

          hover:from-60%
        `}
							>
								Mở thẻ ngay
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default CommonInfoForm
