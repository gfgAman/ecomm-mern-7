

import { createContext, useEffect, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '../../assets/logo.jfif'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()

    const data = useSelector(state=>state.cartSlice.cart)



    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                <div className="flex items-center justify-between gap-6 lg:gap-12">
                    {/* Logo */}
                    <img src={logo} alt="logo" className="h-8 w-auto flex-shrink-0" onClick={()=>navigate('/')}/>

                    {/* Search bar - visible on lg+ only */}
                    <div className=" lg:block flex-grow">
                        <form className="w-full max-w-xl mx-auto">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="py-4 block w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 bottom-3 bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-1.5 rounded-lg"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Navigation Links */}
                    <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                        
                            <span className="text-sm font-semibold text-gray-900" onClick={() => navigate('/cart')}>Cart{data.length}</span>
                            <span className="text-sm font-semibold text-gray-900" onClick={() => navigate('/contact-us')}>Contact Us</span>
                            <span className="text-sm font-semibold text-gray-900" onClick={() => navigate('/')}>Home</span>
                                        
                    </PopoverGroup>

                    {/* Logout Button */}
                    <div className="hidden lg:flex lg:items-center cursor-pointer">
                        <span onClick={() => navigate('/')} className="text-sm font-semibold text-gray-900">
                            Log out <span aria-hidden="true">&rarr;</span>
                        </span>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md"
                        >
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">E-commerce</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
