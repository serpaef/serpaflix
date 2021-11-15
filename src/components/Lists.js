import React from 'react'

function Lists({Movies}) {
  return (
    <section className="lists">
      {Movies && Movies.map((item, index) => (
        <div>
          {item.title}
        </div>
      ))}
    </section>
  )
}

export default Lists
