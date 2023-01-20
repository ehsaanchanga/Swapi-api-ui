import React from 'react';
import { useRouter } from 'next/router';
import { peoplesUrl } from '../../Urls/baseUrl';
import Pagination from '../../components/Pagination';

const People = ({ data }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(
      {
        query: { page: page },
      },
      undefined,
      { shallow: false }
    );
  };
  return (
    <>
      <h1 className='text-center text-lg '>List of People</h1>
      <div className='flex flex-wrap'>
        {data?.results?.map((person, index) => {
          return (
            <div key={person.name} className='w-full md:w-1/3 p-4'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <img
                  className='w-16 h-16 rounded-full mx-auto mb-4'
                  src={`https://source.unsplash.com/random/?people&${person.name}`}
                  alt='Avatar'
                />
                <h4 className='text-lg font-medium text-gray-900 text-center mb-2'>
                  {person.name}
                </h4>
                <div className='flex flex-wrap justify-between gap-1'>
                  <p className='text-gray-600 '>
                    created At: {new Date(person.created).toLocaleDateString()}
                  </p>
                  <p className='text-gray-600'>height: {person.height}</p>
                  <p className='text-gray-600'>
                    created At: {new Date(person.created).toLocaleDateString()}
                  </p>
                  <p className='text-gray-600'>mass: {person.mass}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination count={data?.count} parentPageChange={handlePageChange} />
    </>
  );
};

export async function getServerSideProps(context) {
  const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));

  const { query } = context;
  const page = query.page || 1;

  let res = await fetch(`${peoplesUrl}?page=${page}`);
  await delay(1000);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default People;
