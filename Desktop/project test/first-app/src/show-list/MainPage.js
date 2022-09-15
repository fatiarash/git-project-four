import { useState, useEffect } from "react";
import { BASE_URL } from "../BASE-URL/Baseurl";
import axios from "axios";
import ShowList from "./ShowList";
import "./showlist.css";
import ReactLoading from "react-loading";
import InfiniteScroll from "react-infinite-scroll-component";

function MainPage() {
  const [newdata, setNewdata] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [myData, setMyData] = useState([]);

  const fetchListData = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/posts?limit=12&page=${pageNumber}`
    );
    return setNewdata(data && data.data && data.data.data);
  };
  useEffect(() => {
    setMyData(newdata);
  }, [newdata.length]);
  const getmoreads = () => {
    setPageNumber((prvs) => prvs + 1);
  };
  useEffect(() => {
    fetchListData();
    setMyData((prvs) => prvs.concat(newdata));
  }, [pageNumber]);

  return (
    <div>
      <InfiniteScroll
        dataLength={myData.length}
        next={getmoreads}
        hasMore={myData.length >= 100 ? false : true}
        loader={
          <div className="loading">
            <ReactLoading
              type="bubbles"
              color="#6b6b6b"
              height={60}
              width={60}
            />
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>به انتهای مقالات رسیدید !</p>
        }
      >
        <ShowList newdata={myData && myData} />{" "}
      </InfiniteScroll>
    </div>
  );
}

export default MainPage;
