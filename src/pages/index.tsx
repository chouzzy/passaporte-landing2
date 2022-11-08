import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Navbar } from "../components/1-Navbar";
import { InitialHome } from "../components/2-Homepage";
import { Homepage } from "../components/2-Homepage/Homepage";
import { Services } from "../components/3-Services";
import { Footer } from "../components/6-Footer";
import WhatsButton from "../components/WhatsButton";


export default function Home() {

  function HomeBase() {
    return (
      <>
        <InitialHome serviceOn={true}/>
      </>
    )
  }
  const [page, setPage] = useState(HomeBase);
  
  
  function changePage(lineData) {
    setPage(ServiceItem(lineData))
  }
  function backPage() {
    setPage(HomeBase)
  }

  function ServiceItem(lineData?) {
    return (
      <Homepage servicePageData={lineData} backPage={backPage} serviceOn={false}/>
      )
  }

  return (
    <>
    <Head>
      <title>Clube do Passaporte</title>
    </Head>
    {page}
    <Footer/>
    <WhatsButton/>
    {/* // Homepage basica até o Como conseguir a Cidadania Portuguesa? - botão descubra se é elegivel indo para contacts
    // serviços (nacionalidade e visto)
    // feedbacks
    // About com nossa missão e clube do passaporte é uma empresa */}
    </>
  )
}
