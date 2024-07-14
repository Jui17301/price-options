import { useState } from "react";
import Link from "../Link/Link"
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";

const NavBar = () => {
  const [open,setOpen]= useState(false)
  const routes=[
    {id:1,path:'/',name:'Home'},
    {id:2,path:'/about',name:'About'},
    {id:3,path:'/services',name:'Services'},
    {id:4,path:'/contact',name:'Contact'},
    {id:5,path:'*',name:'NotFound'},
  ]
  return (
    <nav className="text-black p-6 bg-yellow-500">
     <div className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
      {
        open===true ?<IoIosCloseCircleOutline />: <TiThMenu />
      }
     
     </div>
      <ul className={`md:flex 
        ${open
          ?"top-16"
          :"-top-60"
        }
        absolute
        md:static px-6 bg-yellow-500`}>
      {
        routes.map(route=>(
          <Link key={route.id} route={route}></Link>
        )
        )
      }
      </ul>
    </nav>
  )
}

export default NavBar
