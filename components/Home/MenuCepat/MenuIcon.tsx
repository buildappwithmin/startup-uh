import { type FC } from 'react';
import Image from 'next/image';

const MenuIcon: FC<{ src?: string }> = ({ src = '' }) => (
  <div className="relative w-14 h-14">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FAFAFA] to-transparent opacity-[0.15] backdrop-blur backdrop-filter" />
    <div className="flex z-10">
      <Image
        className="absolute inset-0 m-auto h-auto"
        src={src}
        width={32}
        height={32}
        quality={100}
        alt="Menu Cepat"
        priority
      />
    </div>
  </div>
);

export default MenuIcon;
