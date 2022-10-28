import { auth } from '@clerk/nextjs'
import Header from '@/components/Header'
import { findDoc } from '@/actions/findDoc'
import Title from '@/components/Main/Title'
import Editor from '@/components/Editor/editor'
import { cn, isValidObjectID } from '@/lib/utils'
import { getIsOwner } from '@/actions/getIsOwner'
import { Metadata, ResolvingMetadata } from 'next'
import IconImage from '@/components/Main/IconImage'
import Forbidden from '@/components/Main/Forbidden'
import { notFound, redirect } from 'next/navigation'
import CoverImage from '@/components/Main/coverImage'
import { ScrollArea } from '@/components/ui/ScrollArea'
import IconImgUploadBtn from '@/components/Main/IconImgUploadBtn'
import CoverImgUploadBtn from '@/components/Main/CoverImgUploadBtn'

interface ParamsProps {
	params: { documentId: string }
}

const Page: React.FC<ParamsProps> = async ({ params: { documentId } }) => {
	const validObjectID = isValidObjectID(documentId)

	if (!validObjectID) return notFound()

	const doc = await findDoc(documentId)

	if (!doc) return notFound()

	const { userId } = auth()

	if (!userId) {
		return redirect(`/$sign-in`)
	}

	const isOwner = await getIsOwner(documentId, userId)

	if (!isOwner) {
		return <Forbidden />
	}

	const { title, coverImage, iconImage, editorJson } = doc

	return (
		<>
			<Header doc={doc} />

			<ScrollArea
				className='h-[calc(100vh_-_48px)]'
				type='always'>
				<main className='flex flex-col h-[inherit]'>
					{coverImage && (
						<CoverImage
							coverImage={coverImage}
							id={documentId}
						/>
					)}

					<section className='flex flex-col flex-1 w-full'>
						<div
							className={cn(
								'group flex flex-col shrink-0 px-10 md:px-24 w-full max-w-[900px] mx-auto relative',
								iconImage && coverImage && 'pt-[70px]',
								!iconImage && coverImage && 'pt-[25px]',
								iconImage && !coverImage && 'pt-16',
								!iconImage && !coverImage && 'pt-10'
							)}>
							{iconImage && (
								<IconImage
									id={documentId}
									isCoverImage={!!coverImage}
									iconImage={iconImage}
								/>
							)}

							{!(iconImage && coverImage) && (
								<div className='h-6 inline-flex gap-2 mt-5'>
									{!iconImage && (
										<IconImgUploadBtn id={documentId} />
									)}
									{!coverImage && (
										<CoverImgUploadBtn id={documentId} />
									)}
								</div>
							)}

							<Title
								currentTitle={title}
								id={documentId}
							/>
						</div>

						<Editor
							id={documentId}
							editorJson={editorJson}
						/>
					</section>
				</main>
			</ScrollArea>
		</>
	)
}

export default Page

export async function generateMetadata(
	{ params: { documentId } }: ParamsProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const previousImages = (await parent).openGraph?.images || []

	const validObjectID = isValidObjectID(documentId)

	if (!validObjectID)
		return {
			title: 'Not Found',
			openGraph: {
				images: [...previousImages],
			},
			icons: {
				icon: [
					{
						type: 'image/x-icon',
						sizes: 'any',
						url: '/favicon.ico',
					},
				],
			},
		}

	// fetch data
	const document = await findDoc(documentId)

	const { userId } = auth()

	if (!userId) {
		return redirect(`/$sign-in`)
	}

	const isOwner = await getIsOwner(documentId, userId)

	// optionally access and extend (rather than replace) parent metadata

	return {
		title: !document
			? 'Not Found'
			: !isOwner
			? 'Forbidden'
			: document.title || 'Untitled',
		openGraph: {
			images: [...previousImages],
		},
		icons: {
			icon: [
				{
					type: 'image/x-icon',
					sizes: 'any',
					url: !isOwner
						? '/favicon.ico'
						: document?.iconImage
						? ''
						: '/favicon.ico',
				},
			],
		},
	}
}
