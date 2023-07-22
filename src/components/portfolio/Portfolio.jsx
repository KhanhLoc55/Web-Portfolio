import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "./data.js";
import Card from "./Card";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-title">
          <h2 className="portfolio-heading">Portfolio</h2>
        </div>
        <ul className="portfolio-list">
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <div className="portfolio-box">
          {data.map((value, index) => {
            return (
              <Card
                key={index}
                img={value.img}
                category={value.category}
                totalLike={value.totalLike}
                title={value.title}
                desc={value.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
