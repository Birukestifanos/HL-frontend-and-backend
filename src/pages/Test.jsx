// import { useEffect, useState } from "react";
// import API from "../services/api";

// function Test() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     API.get("/news")
//       .then((res) => setNews(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>News from Backend</h1>
//       {news.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         news.map((item) => <p key={item.id}>{item.title}</p>)
//       )}
//     </div>
//   );
// }

// export default Test;