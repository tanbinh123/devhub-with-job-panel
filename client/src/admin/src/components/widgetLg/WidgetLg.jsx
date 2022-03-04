import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Recently Hired</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Talents</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Company</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="/assets/person/Andy.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Andres Trutsi</span>
          </td>
          <td className="widgetLgDate">12 Nov 2021</td>
          <td className="widgetLgAmount">Tieto</td>
          <td className="widgetLgStatus">
            <Button type="Hired" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="/assets/person/Dipok.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Dipok Sarker</span>
          </td>
          <td className="widgetLgDate">13 Oct 2021</td>
          <td className="widgetLgAmount">KESKO</td>
          <td className="widgetLgStatus">
            <Button type="Hired" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Dora Hawks</span>
          </td>
          <td className="widgetLgDate">2 Jul 2021</td>
          <td className="widgetLgAmount">NOVAX</td>
          <td className="widgetLgStatus">
            <Button type="Waiting for confirmation" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Neil Pearson</span>
          </td>
          <td className="widgetLgDate">18 Sept 2021</td>
          <td className="widgetLgAmount">TOKMANNI</td>
          <td className="widgetLgStatus">
            <Button type="Hired" />
          </td>
        </tr>
      </table>
    </div>
  );
}