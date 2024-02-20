import React from 'react'

const page = ({params}: {params:{id: string}}) => {
  return (
    <div>pagePrams is {params.id}</div>
  )
}

export default page