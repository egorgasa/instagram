import React from "react";
import User from "./User";
export default function Users(){
    return(
        <div className='right'>
            <User src='https://i.ytimg.com/vi/PDnFvgdruJ8/maxresdefault.jpg'
                  alt='man'
                  name='Scott'
            />
<div className='users__block'>
    <User src='https://i.ytimg.com/vi/PDnFvgdruJ8/maxresdefault.jpg'
          alt='man'
          name='sasa'
    />
    <User src='https://i.ytimg.com/vi/PDnFvgdruJ8/maxresdefault.jpg'
          alt='man'
          name='Gleb'
    />
    <User src='https://i.ytimg.com/vi/PDnFvgdruJ8/maxresdefault.jpg'
          alt='man'
          name='Maks'
    />
    <User src='https://i.ytimg.com/vi/PDnFvgdruJ8/maxresdefault.jpg'
          alt='man'
          name='Egor'
    />

</div>
        </div>

    )
}