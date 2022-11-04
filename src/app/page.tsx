import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Home/Nav'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { buttonVariants } from '@/components/ui/Button'
import { getInitialDoc } from '@/actions/getInitialDoc'
import { createUntitled } from '@/actions/createUntitled'
import PreventBubblingClient from '@/components/PreventBubblingClient'

export default async function Home() {
	const { userId } = auth()

	if (userId) {
		const document = await getInitialDoc(userId)

		if (document) {
			return redirect(`/${document.id}`)
		} else {
			const { id } = await createUntitled(userId)

			return redirect(`/${id}`)
		}
	}

	return (
		<div className='max-w-[1400px] mx-auto'>
			<Nav />
			<main className='mt-[62px] h-[calc(100vh_-_190px)] grid place-items-center xl:mx-auto px-[32px] sm:px-[70px] md:px-[125px] overflow-hidden'>
				<section className='text-center flex flex-col items-center justify-center gap-3 mx-auto'>
					<header className='xs:w-full w-[400px] flex flex-col items-center gap-4'>
						<h1 className='text-center pt-20 items-center text-5xl md:text-6xl lg:text-8xl  w-auto font-bold'>
							Your Wiki, Docs & Projects. Together.
						</h1>
						<p className='font-medium text-2xl my-5 max-w-[660px]'>
							Maximize efficiency. Collaborate seamlessly.
							Collaborate effortlessly, and achieve more in less
							time.
						</p>
						<Link
							className={`${buttonVariants({
								variant: 'default',
								size: 'xl',
							})}`}
							href='/sign-up'>
							Get Started Now
						</Link>
					</header>
				</section>
			</main>
		</div>
	)
}
