import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import '../assets/admin_content_page.css'
import { AppContext } from '../app_context'

let ProductsContext

const Products = () => {
  const appContext = useContext(AppContext)

  ProductsContext = React.createContext()
  const state = {
    appContext: appContext,
    products: null,
    isUpdatingProduct: false,
    updatingProduct: {},
  }

  useEffect(() => {
    const request = {
      url: appContext.SERVER_URL + '/products',
      method: 'GET',
    }
    axios(request)
      .then((response) => {
        // console.log(response.data)
        state.products = response.data
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])
  console.log(state)
  return (
    <ProductsContext.Provider value={state}>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
        <h1 className='h2'>Categories</h1>
        <ActionButtons />
      </div>
      <div className='card p-3'>
        {/* <CategoryForm
          appContext={appContext}
          categories={categories}
          setCategories={setCategories}
          isUpdatingCategory={isUpdatingCategory}
          setIsUpdatingCategory={setIsUpdatingCategory}
          UpdatingCategory={UpdatingCategory}
          setUpdatingCategory={setUpdatingCategory}
        /> */}
      </div>
      <div className='mt-5'>
        <ProductsTable />
      </div>
    </ProductsContext.Provider>
  )
}

const ActionButtons = () => {
  return (
    <div className='btn-toolbar mb-2 mb-md-0'>
      <div className='btn-group me-2'>
        <button type='button' className='btn btn-sm btn-outline-secondary'>
          Share
        </button>
        <button type='button' className='btn btn-sm btn-outline-secondary'>
          Export
        </button>
      </div>
      <button
        type='button'
        className='btn btn-sm btn-outline-secondary dropdown-toggle'
      >
        <span data-feather='calendar' className='align-text-bottom'></span>
        This week
      </button>
    </div>
  )
}
// const CategoryForm = ({
//   appContext,
//   categories,
//   setCategories,
//   isUpdatingCategory,
//   setIsUpdatingCategory,
//   UpdatingCategory,
//   setUpdatingCategory,
// }) => {
//   const [categoryName, setCategoryName] = useState('')
//   const [isTextFieldUpdated, setIsTextFieldUpdated] = useState(false) //will be used in udating functionality only
//   const [message, setMessage] = useState('')

//   const createCategory = () => {
//     const request = {
//       url: appContext.SERVER_URL + '/categories',
//       method: 'POST',
//       data: { category_name: categoryName },
//     }
//     axios(request)
//       .then((response) => {
//         if (typeof response.data === 'object') {
//           setCategories([...categories, response.data])
//           setCategoryName('')
//         }
//       })
//       .catch((err) => {
//         console.log(err.response.data)
//       })
//   }

//   const onSuccessfullCategoryUpdate = () => {
//     const newCategories = categories.map((category) => {
//       if (category._id === UpdatingCategory._id)
//         return { ...category, category_name: categoryName }
//       else return category
//     })
//     setCategories(newCategories)
//   }

//   const updateCategory = () => {
//     if (isTextFieldUpdated) {
//       // const updatedCategory = {
//       //   ...UpdatingCategory,
//       //   category_name: categoryName,
//       // }

//       const request = {
//         url: appContext.SERVER_URL + '/categories/' + UpdatingCategory._id,
//         method: 'PATCH',
//         data: { category_name: categoryName },
//       }

//       setMessage('Updating...')
//       axios(request)
//         .then((result) => {
//           if (result.data.modifiedCount > 0) {
//             onSuccessfullCategoryUpdate()
//             setIsUpdatingCategory(false)
//             setMessage('')
//           }
//         })
//         .catch((error) => {
//           console.log('error occured ' + error)
//           setMessage('Something went wrong, please try again after Some time')
//         })

//       setIsTextFieldUpdated(false)
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     createCategory()
//   }

//   const handleUpdate = (e) => {
//     e.preventDefault()
//     updateCategory()
//   }

//   const handleCancel = () => {
//     setIsUpdatingCategory(false)
//     setUpdatingCategory({})
//   }

//   const categoryNameForTextField = isUpdatingCategory
//     ? UpdatingCategory.category_name
//     : ''

//   return (
//     <form>
//       <div className='form-group row'>
//         <label htmlFor='inputEmail' className='col-sm-2 col-form-label'>
//           Category Name
//         </label>
//         <div className='col-sm-10'>
//           <input
//             type='text'
//             className='form-control'
//             placeholder='Enter category name'
//             onChange={(e) => {
//               setCategoryName(e.target.value)
//               setIsTextFieldUpdated(true)
//             }}
//             defaultValue={categoryNameForTextField}
//             key={categoryNameForTextField}
//           />
//         </div>
//       </div>

//       <div className='form-group row'>
//         <div className='col-sm-10 offset-sm-2'>
//           {isUpdatingCategory ? (
//             <>
//               <button
//                 type='submit'
//                 className='btn btn-warning'
//                 style={{ marginRight: 10 + 'px' }}
//                 onClick={handleUpdate}
//               >
//                 Update Category
//               </button>
//               <button
//                 type='submit'
//                 className='btn btn-info'
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               type='submit'
//               className='btn btn-primary'
//               onClick={handleSubmit}
//             >
//               Add Category
//             </button>
//           )}
//         </div>
//         <label className='mt-4'>{message !== '' ? message : ''}</label>
//       </div>
//     </form>
//   )
// }

const ProductsTable = () => {
  const productsContext = useContext(ProductsContext)
  console.log(productsContext.products)
  // const products = productsContext.products

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Product Name</th>
          <th scope='col'>Price</th>
          <th scope='col' style={{ width: 20 + '%' }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {products.map((product, index) => {
          return (
            <ProductsTableRow
              key={product._id}
              index={index}
              product={product}
            />
          )
        })} */}
      </tbody>
    </table>
  )
}

const ProductsTableRow = ({ index, product }) => {
  // const updateHandler = () => {
  //   setIsUpdatingCategory(true)
  //   setUpdatingCategory(category)
  // }

  // const afterCategoryDelete = (deleted_category) => {
  //   const newCategories = categories.filter(
  //     (category) => category._id !== deleted_category._id
  //   )
  //   setCategories(newCategories)
  // }

  // const deleteCategory = (category) => {
  //   if (
  //     window.confirm('Do you want to delete category ' + category.category_name)
  //   ) {
  //     const request = {
  //       url: appContext.SERVER_URL + '/categories/' + category._id,
  //       method: 'DELETE',
  //     }
  //     axios(request)
  //       .then((response) => {
  //         if (response.data.deletedCount > 0) afterCategoryDelete(category)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }

  return (
    <tr>
      admin_content_page
      <th className='categories-table-td' scope='row'>
        {index + 1}
      </th>
      <td className='categories-table-td'>{product.product_name}</td>
      <td className='categories-table-td'>{product.price}</td>
      <td>
        <button
          type='button'
          className='btn btn-sm btn-outline-warning mt-0'
          style={{ marginRight: 10 }}
          // onClick={updateHandler}
        >
          Edit
        </button>
        <button
          type='button'
          className='btn btn-sm btn-outline-danger mt-0'
          // onClick={() => deleteCategory(category)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Products
