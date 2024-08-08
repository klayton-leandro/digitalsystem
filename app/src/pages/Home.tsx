import React from 'react'

import { LayoutHome  } from 'layouts';
import { useRoot } from 'contexts';

export default function Home() {
  const { links} = useRoot() 
  return (
    <>
      <LayoutHome
        {...{ links }}
      >
        <></>
      </LayoutHome>
    </>
  )
}
