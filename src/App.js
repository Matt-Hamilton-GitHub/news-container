import "./styles.css";
import pic from "./img/news-img.jpg";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

export default function App() {
  return (
    <div className="news-div">
      <div className="search-filters">
        <div className="filter-item">
          {/* <h1></h1> */}
          <select>
            <option>CNN</option>
            <option>TV NEWS</option>
          </select>
        </div>
        <div className="filter-item">
          {/* <MdDateRange size={35} color={"grey"} /> */}
          <input type="date" />
        </div>
        <div className="filter-item">
          {" "}
          {/* <FaSortAmountDownAlt size={35} color={"grey"} /> sort */}
        </div>
        <div>
          {/* <IoMdSearch size={35} color={"grey"} /> */}
          <input className="search" placeholder="search" />
        </div>
      </div>
      <img src={pic} alt="news-img-1" />

      <div className="news-details">
        <h1>Tesla Today</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      <div className="next-icon">
        <HiOutlineChevronRight size={150} color={"white"} />
      </div>
    </div>
  );
}
