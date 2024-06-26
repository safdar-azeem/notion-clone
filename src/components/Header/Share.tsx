'use client'

import { cn, preventBubbling } from '@/lib/utils'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/DropdownMenu'

import { buttonVariants } from '@/components/ui/Button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import {
	CheckIcon,
	ExternalLinkIcon,
	Link2Icon,
	Share1Icon,
} from '@radix-ui/react-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface ShareProps {
	isShare?: boolean
}
const Share: React.FC<ShareProps> = ({ isShare }) => {
	const pathName = usePathname()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggle = () => setIsOpen(!isOpen)

	if (isShare) return null

	const closeDelayed = () => {
		setTimeout(() => setIsOpen(false), 500)
	}

	return (
		<DropdownMenu
			open={isOpen}
			onOpenChange={toggle}>
			<DropdownMenuTrigger
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'h-[28px] px-2'
				)}>
				<Share1Icon className='block md:hidden h-5 w-5 p-[1px]' />
				<span className='hidden md:block'>Share</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				sideOffset={15}>
				<DropdownMenuItem
					className='cursor-pointer'
					asChild>
					<Link
						href={`share${pathName}`}
						target='_blank'
						className='flex gap-2'>
						<ExternalLinkIcon className='w-4 h-4' />
						<span>Open in new page</span>
					</Link>
				</DropdownMenuItem>
				<CopyButton callback={closeDelayed} />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

function CopyButton({ callback }: { callback: () => void }) {
	const pathName = usePathname()
	const [copied, setCopied] = useState<boolean>(false)

	const copylink = () => {
		callback()
		setCopied(true)
	}

	return (
		<CopyToClipboard text={`${window.location.origin}/share${pathName}`} />
	)
}

export default Share
