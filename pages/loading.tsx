export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <LoadingSkeleton />
    </>
  );
}

// https://www.section.io/engineering-education/skeleton-loading-in-nextjs-with-tailwindcss/
const LoadingSkeleton = () => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center  px-20">
        <div className="mt-12 w-1/2 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
          <div className="flex flex-col space-y-2">
            <div className="bg-gray-300 h-6 w-11/12 rounded-md "></div>
            <div className="bg-gray-300 h-6 w-10/12 rounded-md "></div>
            <div className="bg-gray-300 h-6 w-9/12 rounded-md "></div>
            <div className="bg-gray-300 h-6 w-9/12 rounded-md "></div>
          </div>
        </div>
      </div>
    </>
  );
};
