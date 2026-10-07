import "../Page3/P3_secc2.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Nacalo1">
                <div className="stoleyaflow">
                    <img src={Photo.chel}></img>
                    <div className="YEAH">
                        <h1><span>Owner</span> & Executive Chef</h1>
                        <p>Ismail Marzuki</p>
                        <div className="Turn">
                            <div className="comengo"><p>“</p></div>
                         <p className="p_cen">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="comengo1"><p>„</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}