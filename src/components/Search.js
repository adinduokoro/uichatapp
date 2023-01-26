import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a User'/>
      </div>
      <div className='userChat'>
        <img src="https://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search