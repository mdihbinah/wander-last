import Image from "next/image";
import Link from "next/link";


const NavBar = () => {
    return (
        <div className="flex justify-between gap-3 bg-white p-5">
            <ul className="flex gap-3">
                <li><Link href={'/home'}>Home</Link></li>
                <li><Link href={'/destination'}>Destination</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} alt="logo" width={150} height={150}></Image>
            </div>
            <ul className="flex gap-3">
        <li><Link href={'/profile'}>Profile</Link></li>
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/signup'}>Sign Up</Link></li>
      </ul>
        </div>
    );
};

export default NavBar;