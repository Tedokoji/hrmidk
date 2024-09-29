import React from 'react'
import Grade from '../Admin/Findidk/Grade'
import GradeButtonclientfuckthisserversideclientshitaaaaa from './GradeButtonclientfuckthisserversideclientshitaaaaa'

const Userpage = () => {
  return (
    <>
    <div className="Banner">
      <div className="title">
        Quick Makeshift Website User Main page

      </div>
    </div>
      <div className="MainUserPageWrapper">
        <div>
          <div className="bordered ">
            <p className="bordered-span-tag">Quick Acess</p>
            <div className="innerbordered">
             <Grade title="Send requests"/>
             <Grade title="Check Schedules"/>
             <Grade title="Go to admin page cuz i forgot to do user, carried away ehe"/>
              
            </div>
          </div>
        </div>
        <div className="borderedright">
        <p className="bordered-span-tag">Miscs</p>
        <Grade title="Internal chat"/>
        <GradeButtonclientfuckthisserversideclientshitaaaaa></GradeButtonclientfuckthisserversideclientshitaaaaa>
         
        </div>
      </div>
      
    </>
  )
}

export default Userpage