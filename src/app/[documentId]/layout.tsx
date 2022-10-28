import React from 'react'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { findDoc } from '@/actions/findDoc'
import { isValidObjectID } from '@/lib/utils'
import ReactResizablePanels from '@/components/MyResizablePanels/ResizablePanels'

interface LayoutProps {
	children: React.ReactNode
	params: { documentId: string }
}

function getDefaultLayout() {
	const layout = cookies().get('react-resizable-panels:layout')
	if (layout) {
		return JSON.parse(layout.value)
	}
}

const Layout: React.FC<LayoutProps> = async ({
	children,
	params: { documentId },
}) => {
	const validObjectID = isValidObjectID(documentId)

	if (!validObjectID) return notFound()

	const document = await findDoc(documentId)

	if (!document) return notFound()

	const defaultLayout = getDefaultLayout()

	return (
		<div className='h-screen w-full flex'>
			<ReactResizablePanels
				defaultLayout={defaultLayout}
				right={children}
			/>
		</div>
	)
}

export default Layout
