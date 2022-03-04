import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Jobs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4150</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to year 2020</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">devHuß Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2115</span>
          <span className="featuredMoneyRate">
            +12 <ArrowUpward className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">Compared to year 2020</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Hired via devHuß</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Year 2021</span>
      </div>
    </div>
  );
}