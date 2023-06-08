import Logo from "../../../assets/images/logo.jpg";
import './Footer.css';

export default function Footer() {
  return (
    <>
        <div className="container-fluid bg-white border-top p-2 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center gap-1">
                <h2 className="logo-text mt-1">Healthify</h2>
                <img src={Logo} alt="logo" className="logo-img" />
            </div>
            <div>
                <p>Copyrights &copy; 2023, Made with Love &hearts; </p>
            </div>
        </div>
    </>
  )
}
