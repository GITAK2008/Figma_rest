import "../Page1/P1_secc7.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec7">
                <div className="Sec7_cen">
                    <div className="Text">
                        <h1>we are open from</h1>
                        <div className="Schedule">
                            <h1>Monday-Sunday</h1>
                            <p>Launch : Mon-Sun : 11:00am-02:00pm</p>
                            <p>Dinner : sunday : 04:00pm-08:00pm</p>
                            <p>Breakfast : saturday : 04:00pm-09:00pm</p>
                        </div>
                        <div className="Buttons">
                            <button className="Order">Order now</button>
                            <button className="Reserv">Reservation</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}