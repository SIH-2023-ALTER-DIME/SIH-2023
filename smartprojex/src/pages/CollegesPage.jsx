import React from "react";
import searchIMG from "../images/search.png";
import gu1 from "../images/gu1.webp";
import gu2 from "../images/gu2.jpeg";
import "../css/colleges.css";

const CollegesPage = () => {
  const search = document.getElementById("searchBar");
  const table_rows = document.querySelectorAll("tbody tr");
  const table_headings = document.querySelectorAll("thead th");

  // 1. Searching for specific data of HTML table

  function searchTable() {
    table_rows.forEach((row, i) => {
      let table_data = row.textContent.toLowerCase(),
        search_data = search.value.toLowerCase();

      row.classList.toggle("hide", table_data.indexOf(search_data) < 0);
      row.style.setProperty("--delay", i / 25 + "s");
    });

    document
      .querySelectorAll("tbody tr:not(.hide)")
      .forEach((visible_row, i) => {
        visible_row.style.backgroundColor =
          i % 2 == 0 ? "transparent" : "#0000000b";
      });
  }

  // 2. Sorting | Ordering data of HTML table

  table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
      table_headings.forEach((head) => head.classList.remove("active"));
      head.classList.add("active");

      document
        .querySelectorAll("td")
        .forEach((td) => td.classList.remove("active"));
      table_rows.forEach((row) => {
        row.querySelectorAll("td")[i].classList.add("active");
      });

      head.classList.toggle("asc", sort_asc);
      sort_asc = head.classList.contains("asc") ? false : true;

      sortTable(i, sort_asc);
    };
  });

  function sortTable(column, sort_asc) {
    [...table_rows]
      .sort((a, b) => {
        let first_row = a
            .querySelectorAll("td")
            [column].textContent.toLowerCase(),
          second_row = b
            .querySelectorAll("td")
            [column].textContent.toLowerCase();

        return sort_asc
          ? first_row < second_row
            ? 1
            : -1
          : first_row < second_row
          ? -1
          : 1;
      })
      .map((sorted_row) =>
        document.querySelector("tbody").appendChild(sorted_row)
      );
  }

  return (
    <div className="body">
      <div className="table">
        <section className="table__header">
          <h1>College Details</h1>
          <div className="input-group">
            <input
              type="search"
              placeholder="Search Data..."
              id="searchBar"
              onChange={searchTable}
            />
            <img src={searchIMG} alt="" />
          </div>
        </section>
        <section className="table__body">
          <table id="table">
            <thead>
              <tr>
                <th>
                  {" "}
                  Id <span className="icon-arrow">&UpArrow;</span>
                </th>
                <th>
                  {" "}
                  Colleges <span className="icon-arrow">&UpArrow;</span>
                </th>
                <th>
                  {" "}
                  Location <span className="icon-arrow">&UpArrow;</span>
                </th>
                <th>
                  {" "}
                  Last Update <span className="icon-arrow">&UpArrow;</span>
                </th>
                <th>
                  {" "}
                  Projects <span className="icon-arrow">&UpArrow;</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 1 </td>
                <td>
                  {" "}
                  <img src={gu1} alt="" />
                  Galgotias University
                </td>
                <td> Greater Noida </td>
                <td> 17 Dec, 2022 </td>
                <td>
                  {" "}
                  <strong> 128 </strong>
                </td>
              </tr>
              <tr>
                <td> 2 </td>
                <td>
                  <img src={gu2} alt="" /> Galgotias College{" "}
                </td>
                <td> Knowledge Park II </td>
                <td> 27 Aug, 2023 </td>
                <td>
                  {" "}
                  <strong>535</strong>{" "}
                </td>
              </tr>
              <tr>
                <td> 3 </td>
                <td>
                  {" "}
                  <img src={gu1} alt="" />
                  Galgotias University
                </td>
                <td> Greater Noida </td>
                <td> 17 Dec, 2022 </td>
                <td>
                  {" "}
                  <strong> 128 </strong>
                </td>
              </tr>
              <tr>
                <td> 4 </td>
                <td>
                  <img src={gu2} alt="" /> Galgotias College{" "}
                </td>
                <td> Knowledge Park II </td>
                <td> 27 Aug, 2023 </td>
                <td>
                  {" "}
                  <strong>535</strong>{" "}
                </td>
              </tr>
              <tr>
                <td> 5 </td>
                <td>
                  {" "}
                  <img src={gu1} alt="" />
                  Galgotias University
                </td>
                <td> Greater Noida </td>
                <td> 17 Dec, 2022 </td>
                <td>
                  {" "}
                  <strong> 128 </strong>
                </td>
              </tr>
              <tr>
                <td> 6 </td>
                <td>
                  <img src={gu2} alt="" /> Galgotias College{" "}
                </td>
                <td> Knowledge Park II </td>
                <td> 27 Aug, 2023 </td>
                <td>
                  {" "}
                  <strong>535</strong>{" "}
                </td>
              </tr>
              <tr>
                <td> 7 </td>
                <td>
                  {" "}
                  <img src={gu1} alt="" />
                  Galgotias University
                </td>
                <td> Greater Noida </td>
                <td> 17 Dec, 2022 </td>
                <td>
                  {" "}
                  <strong> 128 </strong>
                </td>
              </tr>
              <tr>
                <td> 8 </td>
                <td>
                  <img src={gu2} alt="" /> Galgotias College{" "}
                </td>
                <td> Knowledge Park II </td>
                <td> 27 Aug, 2023 </td>
                <td>
                  {" "}
                  <strong>535</strong>{" "}
                </td>
              </tr>
              <tr>
                <td> 9 </td>
                <td>
                  {" "}
                  <img src={gu1} alt="" />
                  Galgotias University
                </td>
                <td> Greater Noida </td>
                <td> 17 Dec, 2022 </td>
                <td>
                  {" "}
                  <strong> 128 </strong>
                </td>
              </tr>
              <tr>
                <td> 10 </td>
                <td>
                  <img src={gu2} alt="" /> Galgotias College{" "}
                </td>
                <td> Knowledge Park II </td>
                <td> 27 Aug, 2023 </td>
                <td>
                  {" "}
                  <strong>535</strong>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default CollegesPage;
