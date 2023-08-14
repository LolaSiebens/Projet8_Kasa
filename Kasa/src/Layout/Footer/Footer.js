
import "@/Assets/Style/Scss/Layout/Footer.scss"
import logo from "@/Assets/Images/logo2.png"


const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;