import Link from "next/link";

export default function Page404() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid h-screen min-h-full place-items-center bg-white py-24 px-6 dark:bg-on-primary sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600 dark:text-primary">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-accent sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 brightness-110 dark:text-accent">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md  px-3.5 py-2.5 text-sm font-semibold underline decoration-accent underline-offset-8 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-primary"
            >
              Go back home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-900 underline  decoration-accent underline-offset-8 dark:text-primary"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
