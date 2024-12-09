import Head from 'next/head';

    export default function Quiz() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Sports Quiz</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Quiz Page
            </h1>

            <p className="mt-3 text-2xl">
              Questions will appear here
            </p>
          </main>
        </div>
      );
    }
