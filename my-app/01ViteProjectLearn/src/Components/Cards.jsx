import React, { useState } from 'react'

function Cards({Username, btnText}) {
    console.log("Props: " + {Username});

    const [count, setCount] = useState(0)
  return (
    <div>

<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-3 ">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/3139497/pexels-photo-3139497.jpeg?cs=srgb&dl=pexels-achraf210-3139497.jpg&fm=jpg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div>
      {Username} {btnText}
      </div>
      <div>
        
      </div>
    </figcaption>

  </div>
</figure>
      
      <div>
    
      </div>
    </div>
  )
}

export default Cards
