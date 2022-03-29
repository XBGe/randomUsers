import { useAppContext } from "../context";

const SexBtn = () => {
  const { handleBtn } = useAppContext();

  return (
    <div className="btn-container">
      <div className="btn">
        <input type="radio" name="gender" value="all" onChange={handleBtn} />
        <label>All</label>
      </div>
      <div className="btn">
        <input type="radio" name="gender" value="male" onChange={handleBtn} />
        <label>Male</label>
      </div>
      <div className="btn">
        <input type="radio" name="gender" value="female" onChange={handleBtn} />
        <label>Female</label>
      </div>
    </div>
  );
};

export default SexBtn;
