'use client'
import Link from 'next/link'
import ProfileNavigation from '@/components/shared/navigation/ProfileNavigation'
import Image from 'next/image'
import ThemeToggle from '../ui/func/ThemeToggle'
import { useSession } from 'next-auth/react'
import { type SetStateAction } from 'react'
import { useTheme } from 'next-themes'

const LogoNavigation = ({
  setSidebarIsOpen
}: {
  setSidebarIsOpen: React.Dispatch<SetStateAction<boolean>>
}) => {
  const { data: session } = useSession()
  const { theme } = useTheme()

  return (
    <header className="z-40 py-2 px-6 shadow-md flex justify-between items-center bg-[#fff] dark:bg-[#222222] dark:text-white">
      <div>
        <Link href="/">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Community<span className="text-[#004ee7]">Dev</span>
          </h2>
        </Link>
      </div>
      {session?.user && (
        <div className="flex gap-6 items-center">
          <ThemeToggle />
          <div className="hidden lg:flex">
            <ProfileNavigation name={session?.user?.name?.toString()} />
          </div>
        </div>
      )}
      <button
        onClick={() => { setSidebarIsOpen((prevState) => !prevState) }}
        className="visible lg:hidden"
      >
        <Image
          src={
            theme === 'dark'
              ? '/assets/graphics/btn.png'
              : '/assets/graphics/dark/btn.png'
          }
          alt="btn"
          width={30}
          height={30}
        />
      </button>
    </header>
  )
}

export default LogoNavigation
