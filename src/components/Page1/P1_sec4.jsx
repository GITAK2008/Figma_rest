import "../Page1/P1_secc4.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec4">
                <div className="Sec4_cen">
                    <img src={Photo.simple}></img>
                    <div className="Text">
                        <h1>Let's reserve <span>a table</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <button className="Reserv">Reservation</button>
                    </div>
                </div>
            </section>
        </>
    )
}