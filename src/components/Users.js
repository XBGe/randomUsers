import { useAppContext } from "../context";
import UserInfo from "./UserInfo";
import SexBtn from "./SexBtn";

const Users = () => {
  const { loading, filtered } = useAppContext();

  return (
    <main>
      <div className="section-title">
        <h1>RandomUsers</h1>
        <div className="underline"></div>
      </div>
      <div>
        <SexBtn />
      </div>
      <section className="followers">
        <div className="container">
          {!loading &&
            filtered?.map((user) => {
              return <UserInfo key={user.login.uuid} {...user} />;
            })}
        </div>
      </section>
    </main>
  );
};

export default Users;
