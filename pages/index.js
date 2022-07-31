<meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
import Router,{ useRouter } from 'next/router'
import { useEffect } from 'react';
import { ethers } from 'ethers'

function Top() {
  function Redirect({login}){
    const router = useRouter();

    useEffect(()=>{
      router.push(login);
    },[login])

    return null;
  }

  return <Redirect login="/login" />
}

export default Top