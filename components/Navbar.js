import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='py-4 px-8 bg-cyan-200 text-gray-800 flex flex-wrap justify-between'>
      <Link href='/' className='text-xl text-center'>
        Starwars API
      </Link>
      <div className='flex items-center gap-4'>
        <Link href='/people'>People</Link>
        <Link href='/planets'>Planets</Link>
        <Link href='/films'>Films</Link>
        <Link href='/species'>Species</Link>
        <Link href='/vehicles'>Vehicles</Link>
        <Link href='/starships'>Startships</Link>
      </div>
    </div>
  );
};

export default Navbar;
