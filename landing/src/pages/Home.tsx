import React from 'react'

import { Header, HeadersProps } from "components";

export default function Home() {
  const links: HeadersProps["links"] = [{ label: "ok", path: "/ok" }];
  return (
    <>
      <div className='w-full h-full'>
        <Header {...{ links }} />
      </div>
    </>
  )
}
