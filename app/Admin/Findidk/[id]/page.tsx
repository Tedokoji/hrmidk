// pages/dynamic-folders/[id].tsx
import React from 'react'
import { Person } from '../page';
import Grade from '../Grade';
import Image from 'next/image'
import BackButton from '@/public/Buttons/BackButton';
async function AppView({params}:{params:{id:string}}) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + params.id);
  const user: Person = await res.json();

  return (
   <>
   <BackButton></BackButton>
   
            <Grade title={user.name} className={""}

            >
              <div className="infowrapper">
                
               
                <span>{user.address.city}</span>
              </div>
              <div className="infowrapper">
                
                <span>{user.phone}</span>

              </div>
              <div className="infowrapper">
                
               
                <span>{user.company.name}</span>
              </div>
              <div className="infowrapper">
                
                <span>I'm lazy</span>

              </div>
            </Grade>
     
   </>
  );
}

export default AppView;