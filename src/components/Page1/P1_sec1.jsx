import "../Page1/P1_secc1.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec1">
                <div className="Sec1_cen">
                    <div className="Text">
                        <div className="Res">
                            <p>Restauran</p>
                        </div>
                        <h1>Italian Cuisine</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                        <div className="Buttons">
                            <button className="Order">Order now</button>
                            <button className="Reserv">Reservation</button>
                        </div>
                    </div>
                    <div className="Img_sec">
                        <img src={Photo.food}></img>
                    </div>
                </div>
            </section>
        </>
    )
}