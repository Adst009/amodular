import FooterComponent from "../footer/footer.component";


export default function Layout({children}: any) {

    return(
        <>

            {/*<HeaderComponent/>*/}
            {/*<NavbarComponent/>*/}
            {children}
            <FooterComponent/>
        </>
    );
}