import { Link } from "react-router-dom";
import "./job.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Job() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Job Details</h1>
        <Link to="/application">
          <button className="productAddButton">Apply</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Start" title="Duration" />
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="/assets/post/logo.png" alt="" className="productInfoImg" />
                  <span className="productName">IT Specialist</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">ID:</span>
                      <span className="productInfoValue">8023</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Location:</span>
                      <span className="productInfoValue">Vantaa</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Type of Employment:</span>
                      <span className="productInfoValue">Permanent, Full-time</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Job Position</label>
                  <input type="text" placeholder="IT Specialist" />
                  <label>Level</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Entry</option>
                      <option value="no">Advanced</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="/assets/post/logo.png" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}