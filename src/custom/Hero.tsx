import { Button } from "@/components/ui/button";


import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {  Lock, User, Users } from "lucide-react";

import FormLead from "./form";
import { Link } from "react-router-dom";


const perks = [
    {
      name: 'Team Accounts',
      Icon: User,
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis, '
    },
    {
      name: 'Secured',
      Icon: Lock,
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis,'
    },
    {
      name: 'Engage Customers',
      Icon: Users,
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis,'
    }
  ]

const Hero = () => (
    <>
        <MaxWidthWrapper className='mb-18 mt-28 sm:mt-30 flex flex-col items-center justify-center text-center'>
        
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Power Leads{' '}
          <span className='text-green-600'>Simpler</span>{' '}
          in no time.
        </h1>
        <p className='mt-5 max-w-prose mb-4 dark:text-gray-300 text-zinc-700 sm:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis, minima fugit cumque adipisci, eius sequi doloremque quas delectus consequuntur mollitia, laudantium quos maiores aliquam. Velit deleniti atque voluptate voluptas?
        </p>
        <Link to='/about'>
          <Button >Learn More</Button>
        </Link>
       
      </MaxWidthWrapper>

      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff8b] to-[#37db21] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl p-2 lg:-m-4 flex justify-center lg:rounded-2xl lg:p-4'>
                  <FormLead />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#95ff80] to-[#36ec25] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>

        
        </div>

        <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl dark:text-white text-gray-900 sm:text-5xl'>
              Start with Leads to today!
            </h2>
            <p className='mt-4 text-lg dark:text-gray-300 text-gray-600'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum aliquam quam illo dicta non esse porro et voluptatem vero, repudiandae voluptatum praesentium autem. Saepe ratione nobis id aspernatur dolores expedit
            </p>
          </div>
        </div>

      <section>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h2 className='text-base font-medium dark:text-white text-green-900'>
                    {perk.name}
                  </h2>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      </div>
    </>
)

export default Hero;