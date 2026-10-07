import "../Page1/P1_secc3.scss"
import { Photo } from "../../Photo"
import { useState, useEffect } from 'react';
const items = [
    { id: 1, title: "Spaghetti", category: "Dinner", imageName: "spaget" },
  { id: 2, title: "Gnocchi", category: "Lunch", imageName: "gnoy" },
  { id: 3, title: "Rovioli", category: "Lunch", imageName: "rovi" },
  { id: 4, title: "Penne Alla Vodka", category: ["Dinner", "Drink"], imageName: "pena" },
  { id: 5, title: "Risoto", category: ["Dessert", "Drink", "Lunch"], imageName: "risot" },
  { id: 6, title: "Splitza Signature", category: ["Dessert", "Drink"] , imageName: "Gunna" }
  ];
export default function App(){
        const [activeTab, setActiveTab] = useState("all");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (activeTab === "all") {
      setVisibleItems(items);
    } else {
      setVisibleItems(items.filter(item => item.category.includes(activeTab)));
    }
  }, [activeTab]);
    return(
        <>
        <section className="Sec3">
            <div className="Sec3_con">
                <h1>Our popular menu</h1>
                <div className="Categories">
                    <button onClick={() => setActiveTab("all")} className="but">All category</button>
                    <button onClick={() => setActiveTab("Dinner")} className="but">Dinner</button>
                    <button onClick={() => setActiveTab("Lunch")} className="but">Lunch</button>
                    <button onClick={() => setActiveTab("Dessert")} className="but">Dessert</button>
                    <button onClick={() => setActiveTab("Drink")} className="but">Drink</button>
                </div>
                 <div className="Menu">
            {visibleItems.map(item => (
              <div className="Menu_item" key={item.id}>
                <img src={Photo[item.imageName]} alt={item.title} />
                <h1>{item.title}</h1>
                <img src={Photo.endless} alt="rating" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
                <div className="Price">
                  <h1>$12.05</h1>
                  <button className="Order">Order now</button>
                </div>
              </div>
            ))}
          </div>
                <div className="Switch">
                    <div className="Arrow">
                        <p>❮</p>
                    </div>
                    <div className="Number">
                        <p>1</p>
                    </div>
                    <div className="Number">
                        <p>2</p>
                    </div>
                    <div className="Number">
                        <p>3</p>
                    </div>
                    <div className="Points">
                        <p>. . .</p>
                    </div>
                    <div className="Arrow">
                        <p>❯</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}