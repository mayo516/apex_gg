import axios from "axios";
import React, { useState, useEffect } from "react";

function Main() {
  //   let nowMap;
  //   async function getData() {
  //     try {
  //       //응답 성공
  //       const response = await axios.get(
  //         "https://api.mozambiquehe.re/maprotation?auth=5476d1d4a8c43143be45fac078893032"
  //       );
  //       nowMap = response.data.current.map;
  //       console.log(nowMap);
  //     } catch (error) {
  //       //응답 실패
  //       console.error("error");
  //     }
  //   }

  //   getData();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "https://api.mozambiquehe.re/maprotation?auth=5476d1d4a8c43143be45fac078893032"
      );

      setUsers(response.data.current.map); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <p className="App-p">
        지금 맵은
        <div>{users}</div>입니다.
      </p>

      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Main;
