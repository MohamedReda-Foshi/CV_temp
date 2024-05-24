import React from 'react'

function Button(props) {
  return (
    <div>
          <button
        class="py-2 px-4 bg-transparent text-black-600 font-semibold border border-black rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >{props.name}
      </button>
      </div>
  )
}

export default Button