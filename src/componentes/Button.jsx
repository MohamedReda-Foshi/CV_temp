import React from 'react'

function Button(props) {
  return (
    <div>
          <button
        className="py-2 px-4 bg-transparent text-black-600 font-semibold border rounded border-black dark:border-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >{props.name}
      </button>
      </div>
  )
}

export default Button