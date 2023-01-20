import { baseUrl } from '../Urls/baseUrl';
import Image from 'next/image';
import imageFile from '../public/starwars.jpg';
import Link from 'next/link';

export async function getStaticProps() {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <>
      <section className='text-gray-600 body-font mb-8'>
        <div className='container px-5 py-10 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Welcome to the Star Wars canon universe!
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Here you will Find Graphical representation of all the Star Wars
              data you've ever wanted! eg:- Planets, Spaceships, Vehicles,
              People, Films and Species From all SEVEN Star Wars films
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            {Object.keys(data).length > 0 &&
              Object.entries(data).map((item) => {
                let name = item[0]?.toUpperCase();
                return (
                  <div className='lg:w-1/3 sm:w-1/2 p-4' key={item}>
                    <h2>{name}</h2>
                    <div className='flex relative'>
                      <Image
                        height='auto'
                        className='absolute inset-0 w-full h-full object-cover object-center'
                        src={imageFile}
                        alt={`${name} image`}
                      />
                      <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
                        <h2 className='tracking-widest text-lg title-font font-la  text-indigo-500 mb-1'>
                          {name}
                        </h2>
                        <h1 className='title-font text-sm font-sm text-gray-700 mb-3'>
                          Wanna explore more click the link below
                        </h1>
                        <Link
                          href={`/${name.toLowerCase()}`}
                          className='text-center border cursor-pointer hover:text-blue-600 hover:bg-slate-200'
                        >
                          Explore {name.toLocaleLowerCase()}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
