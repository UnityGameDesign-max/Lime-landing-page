import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu,  } from "lucide-react";
import { Link } from "react-router-dom";


const NavBar = () => {


const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "/"
    },
    {
        id: "about",
        title: "About",
        link: "/about"
    },
];
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar border-b-2">
            <img src={'https://lime24.co.za/img/logo.4445ab93.svg'} alt="Lime" className="w-[124px] h-[32px]" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0': 'mr-2'} text-black mr-10`}
                    >

                        <Link to={nav.link}>
                            <Button className='mr-3' variant={'ghost'}>{nav.title   }</Button>
                        </Link>
                        

                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <Sheet>
                    <SheetTrigger>
                        <Button
                            variant={'ghost'}
                        >
                            <Menu />
                        </Button>
                        
                    </SheetTrigger>
                    <SheetContent>
                    <div>
                        <ul className=''>

                            <>
                                
                                
                                <li>
                                <Link
                                    
                                    className='flex items-center w-full font-semibold'
                                    to='/'>
                                        <Button className="text-primary" variant={'ghost'}>Home</Button>
                                    
                                </Link>
                                </li>
                                <li className='my-3 h-px w-full bg-gray-300' />
                                <li>
                                <Link
                                    
                                    className='flex items-center w-full font-semibold'
                                    to='/about'>
                                        <Button className="text-primary" variant={'ghost'}>About</Button>
                                    
                                </Link>
                                </li>
                                <li className='my-3 h-px w-full bg-gray-300' />
                                
                            </>
                        </ul>
                    </div>
                    </SheetContent>
                </Sheet>
                    
            </div>
        </nav>
    )
}

export default NavBar;