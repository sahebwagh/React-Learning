import React from 'react'

function Card({userName = " SW " , post = "Not Assigned yet"}) {
    // console.log(props);
    
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://th.bing.com/th/id/OIP.FEqv7YYMNjXtrVYqo7HHzAHaE7?cb=iwc1&rs=1&pid=ImgDetMain"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{userName}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card