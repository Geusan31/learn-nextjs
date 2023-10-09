import { Container } from "@mantine/core";
import {Footer} from "../footer";
import {Header} from "../header";

export function Layout({children}) {
  return (
    <>
        <Header/>
        <Container m={0} fluid p={0}>
            {children}
        </Container>
        <Footer/>
    </>
  )
}
