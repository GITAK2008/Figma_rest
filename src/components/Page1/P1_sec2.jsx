import "../Page1/P1_secc2.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec2">
                <div className="Sec2_cen">
                    <div className="Img_sec">
                        <img src={Photo.food2}></img>
                    </div>
                    <div className="Text">
                        <h1>Welcome to <span>delizioso</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <button className="Menu">See our menu</button>
                    </div>
                </div>
            </section>
        </>
    )
}