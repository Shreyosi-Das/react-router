import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // useLoaderData is a hook that allows to fetch data for your router before they are used in components before rendering
  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}