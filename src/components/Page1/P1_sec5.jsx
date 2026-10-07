import "../Page1/P1_secc5.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec5">
                <div className="Sec5_cen">
                    <h1>Our greatest chef</h1>
                    <div className="Humans">
                        <div className="Human">
                            <img src={Photo.twitch}></img>
                            <h1>Betran Komar</h1>
                            <p>Head chef</p>
                        </div>
                        <div className="Human">
                            <img src={Photo.fraer}></img>
                            <h1>Ferry Sauwi</h1>
                            <p>Chef</p>
                        </div>
                        <div className="Human">
                            <img src={Photo.danila}></img>
                            <h1>Iswan Dracho</h1>
                            <p>Chef</p>
                        </div>
                    </div>
                    <button className="View">View All</button>
                </div>
            </section>
        </>
    )
}