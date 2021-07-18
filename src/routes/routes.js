import React, { lazy } from "react"
const UserList=React.lazy(()=>import('../pages/UserList/UserList'))
const UserDetails=React.lazy(()=>import('../pages/UserDetails/UserDetails'))
const AddUser=React.lazy(()=>import('../pages/AddUser/AddUser'))
export const routes=[
{
path:'/',exact:true,page:UserList
},
{
path:'/Add',exact:true,page:AddUser
},
{
path:'/:id',exact:true,page:UserDetails
},
]