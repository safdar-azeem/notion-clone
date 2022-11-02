import '../styles/globals.css'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/Toaster'
import { clerkProviderConfig } from '@/config/clerk'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
	title: 'Notion Clone',
	description: 'Notion Clone Generated by create next app and clerk',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
	],
}

function getShowSidebar() {
	const layout = cookies().get('showSidebar:isShow')
	if (layout) {
		return JSON.parse(layout.value)
	}
	return true
}

export default function RootLayout({
	children,
	auth,
}: {
	children: React.ReactNode
	auth: React.ReactNode
}) {
	const showSidebar = getShowSidebar()
	return (
		<ClerkProvider {...clerkProviderConfig}>
			<html
				lang='en'
				suppressHydrationWarning>
				<head />
				<body className={inter.className}>
					<Providers showSidebar={showSidebar}>
						{auth}
						{children}
						<Toaster />
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	)
}
