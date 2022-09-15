import { useState, useEffect } from "react";
import { BASE_URL } from "../../BASE-URL/Baseurl";
import axios from "axios";
import ShowSinglePost from "./ShowSinglePost";
import { useLocation } from "react-router-dom";

function SinglePost() {
  const [singledata, setSingledata] = useState("");
  const location = useLocation();
let slug = location.pathname.split("/")[2]
  const fetchSinglePost = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/posts/show/${slug}`
    );

    return setSingledata(data?.data);
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);
  return (
    <div>
      <ShowSinglePost singledata={singledata} />
    </div>
  );
}

export default SinglePost;
