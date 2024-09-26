/* eslint-disable react/prop-types */

export function Paginator({ updatePageFnct, pageNumber }) {
  
  const handleNextPage = () => {
    console.log('clicked'+ pageNumber++)
    updatePageFnct(pageNumber ++)
  }

  const handlePrevPage = () => {
    console.log('clicked' + pageNumber--)
    updatePageFnct(pageNumber --)
  }

  return (
    <div className="flex justify-center mt-10 space-x-2">

      {pageNumber > 1 && <button onClick={handlePrevPage}
        className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none">Prev
      </button> }

      <button onClick={handleNextPage}
        className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none">Next
      </button>
    </div>
  );
}