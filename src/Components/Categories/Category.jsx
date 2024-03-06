
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom'

export default function Categories() {
  async function getCategories() {
    return await (axios.get(`https://ecommerce.routemisr.com/api/v1/categories `))
  }

  let { data } = useQuery('Categories', getCategories)
  let categoryItem = data?.data.data
  let [searchTerm, setSearchTerm] = useState('')
  let [searchList, setSearchList] = useState([])

  useEffect(() => {
    setSearchList(categoryItem);
  }, [])

  useEffect(() => {
    setSearchList(categoryItem?.filter((cat) => cat.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm]);
  return (
    <section className='py-5'>
      <div className='container' style={{ padding: '90px' }}>
        <input placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} type="text" name='search' className='form-control mb-5 ' />
        {
          searchList && (
            <div>
              <div className='row'>
                {searchList.map((cat) => (
                  <div key={cat.id} className='col-md-4 '>
                    <Link className='shadowCart  border border-1 my-2 text-decoration-none' to={cat._id}>
                      <img className="w-100" height={300} src={cat.image} alt={cat.slug} />
                      <h5 className=" text-main p-3 text-center fw-bolder">{cat.name}</h5>
                    </Link>
                  </div>
                ))
                }
              </div >
            </div>
          )
        }
      </div >
    </section >

  )
}

