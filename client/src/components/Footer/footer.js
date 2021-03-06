import React from "react";
import PoweredByGoogle from "../../image/poweredbygoogle.png"

function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img className="googleImg" src={PoweredByGoogle} alt="Powered by Google"/>
                    </div>
                    <div className="col-md-6 text-center">
                        <h6>Developed by:</h6>
                        <span><a className="nameLink" href="#!" >Rey Diaz</a> | <a className="nameLink" href={"https://jakefen.github.io/Portfolio/"} >Jake Fenwick</a> | <a className="nameLink" href="#!" >Will Irvin</a> | <a className="nameLink" href={"https://mirkomaya.github.io/updated_portfolio/"} >Mirko Maya</a> | <a className="nameLink" href="http://dyltrimbledev.com/" target="blank">Dyl Trimble</a></span>
                    </div>
                    <div class="footerCopyright text-center py-3">© 2020 Copyright:
    <a href="#"> herestheplan.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;



