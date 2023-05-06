import RemodelaComponent from "./header/header.component";
import FooterComponent from "../footer/footer.component";


export default function Layout({children}: any) {

    return(
        <>

            {/* <HeaderComponent/> */}
            <RemodelaComponent/>
            {children}
            <FooterComponent/>
        </>
    );
}