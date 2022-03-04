import "./application.css";

export default function Application() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Applicant's Details</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="addProductItem">
          <label>Email</label>
          <input type="text" placeholder="exmpl@gmail.com" />
        </div>
        <div className="addProductItem">
          <label>Phone</label>
          <input type="text" placeholder="+358 40 000 0000" />
        </div>
        <div className="addProductItem">
          <label>Address</label>
          <input type="text" placeholder="Road No" />
          <input type="text" placeholder="House No" />
          <input type="text" placeholder="ZIP Code" />
          <input type="text" placeholder="Municipality" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Save</button>
      </form>
    </div>
  );
}