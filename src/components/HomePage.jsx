import React from 'react'
import Layout from './basic/Layout'

export default function HomePage() {
  return (
    <div>
          <Layout>

              <section class="bg-white dark:bg-gray-900 min-h-screen pt-20 pb-20">
                  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">React Awesome</h1>
                      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Framework built to improve React</p>
                      
                  </div>
              </section>


        </Layout>
    </div>
  )
}
