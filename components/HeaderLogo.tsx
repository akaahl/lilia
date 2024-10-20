import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";

export default function HeaderLogo() {
  return (
    <Link href={"/"}>
      <div className="items-center hidden lg:flex">
        <Image
          src={Logo}
          alt="Logo"
          width={72}
          height={72}
        />
        <p className="font-semibold text-2xl text-white ml-2.5">Lilia</p>
      </div>
    </Link>
  );
}
