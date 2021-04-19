import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { FiFacebook, FiMail } from 'react-icons/fi';

import { Input } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anatchela | Create your account for free</title>
        <link rel='icon' href='/favlogo.png' />
      </Head>

      <main
        style={{ background: '#eee' }}
        className=' w-screen h-screen flex justify-center items-center overflow-auto'
      >
        <div className=' max-w-6xl w-full p-9 bg-white flex items-center justify-between rounded-md flex-col md:flex-row'>
          <div className='mt-80 md:mt-0'>
            <Image src='/login-illustration.svg' width={500} height={200} />
          </div>

          <div>
            <h1 className='font-body font-bold text-2xl text-black'>
              Anatchela
            </h1>
            <small className='text-texts-secondary'>Create an account!</small>
            <br />
            <br />

            <div className='flex flex-col items-center '>
              <form action=''>
                <div className='flex flex-col md:flex-row'>
                  <Input
                    name='email'
                    label='Your first name'
                    placeholder='Anatchela'
                    className='mr-4'
                  />
                  <Input
                    name='email'
                    label='Your last name'
                    placeholder='Streaming'
                  />
                </div>

                <div className='flex flex-col md:flex-row'>
                  <Input
                    name='email'
                    label='E-mail'
                    placeholder='your@example.com'
                    className='mr-4'
                  />
                  <br />

                  <Input
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='142rwrq'
                  />
                </div>

                <br />
                <small>
                  <Link href='/signup'>
                    <a className='text-black underline'>
                      I haven't an account.
                    </a>
                  </Link>
                </small>
                <br />
                <br />

                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <button
                    type='button'
                    className='w-44 font-title h-14 bg-primary-blue font-bold text-sm uppercase text-white
              hover:text-primary-blue hover:bg-shapes-corner rounded-md transition duration-150
              outline-none focus:outline-none'
                  >
                    Sign up
                  </button>

                  <span className='text-base text-texts-secondary font-title font-medium uppercase'>
                    or
                  </span>

                  <div className='flex flex-row'>
                    <button className='mr-4 border p-3 rounded-lg'>
                      <FiFacebook className='text-primary-blue' size={24} />
                    </button>

                    <button className='border p-3 rounded-lg'>
                      <FiMail className='text-primary-blue' size={24} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
