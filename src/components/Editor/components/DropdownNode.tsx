'use client'
import { RefObject } from 'react'
import { Editor } from '@tiptap/react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { NodeType, NodeTypeEnum, nodes, EnumNodesTypeLabel } from '../lib/data'
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuContent,
} from '@/components/ui/DropdownMenu'

interface SelectNodeProps {
	editor: Editor
	container: RefObject<HTMLDivElement>['current']
}

const DropdownNode: React.FC<SelectNodeProps> = ({ editor, container }) => {
	let currentNode: NodeType | undefined = undefined

	const activeNodeTypes: NodeType[] = [
		NodeTypeEnum.blockquote,
		NodeTypeEnum.h1,
		NodeTypeEnum.h2,
		NodeTypeEnum.h3,
		NodeTypeEnum.bulletList,
		NodeTypeEnum.orderedList,
		NodeTypeEnum.taskList,
		NodeTypeEnum.paragraph,
		NodeTypeEnum.codeBlock,
	]

	for (const type of activeNodeTypes) {
		if (editor.isActive(type)) {
			if (
				type === NodeTypeEnum.h1 ||
				type === NodeTypeEnum.h2 ||
				type === NodeTypeEnum.h3
			) {
				const level = editor.state.selection.$head.parent.attrs.level
				currentNode = level ? type : undefined
			} else {
				currentNode = type
			}
			break
		}
	}

	const handleClick = (type: NodeType) => {
		const { commands } = editor

		const actionMap: Record<NodeType, () => void> = {
			[NodeTypeEnum.paragraph]: () => commands.setParagraph(),
			[NodeTypeEnum.h1]: () => commands.setHeading({ level: 1 }),
			[NodeTypeEnum.h2]: () => commands.setHeading({ level: 2 }),
			[NodeTypeEnum.h3]: () => commands.setHeading({ level: 3 }),
			[NodeTypeEnum.taskList]: () => commands.toggleTaskList(),
			[NodeTypeEnum.bulletList]: () => commands.toggleBulletList(),
			[NodeTypeEnum.orderedList]: () => commands.toggleOrderedList(),
			[NodeTypeEnum.codeBlock]: () => commands.toggleCodeBlock(),
			[NodeTypeEnum.blockquote]: () => commands.setBlockquote(),
		}

		const action = actionMap[type]
		if (action) action()
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					className='shrink-0 hover:bg-accent border-none shadow-[none] ring-0 rounded-none py-1 px-2 flex items-center'
					type='button'>
					<span className='h-5 flex items-center justify-center rounded-sm select-none'>
						{EnumNodesTypeLabel[currentNode!]}
					</span>{' '}
					<CaretSortIcon className='h-4 w-4 opacity-50 text-primary' />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='z-[9999]'
				container={container}>
				<DropdownMenuLabel className='text-xxs font-normal py-1'>
					Turn into
				</DropdownMenuLabel>
				{nodes.map((node, idx) => (
					<DropdownMenuItem
						key={idx}
						onClick={() => handleClick(node.type)}
						className='cursor-pointer flex justify-between items-center'>
						{node.label}
						{currentNode == node.type && (
							<span className='pl-3'>
								<CheckIcon />
							</span>
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropdownNode
