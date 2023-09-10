import { useState } from "react";
import data from "./data";
import Member from "./Member";
import { FcPrevious, FcNext } from "react-icons/fc";

const App = () => {
  const [listMember, setListMember] = useState(data);
  const [memberIndex, setMemberIndex] = useState(0);

  const handlePrev = () => {
    if (memberIndex===0){
      setMemberIndex(listMember.length-1)
    } else {
      setMemberIndex(memberIndex-1)
    }
  };

  const handleNext = () => {
    if (memberIndex===+(listMember.length-1)){
      setMemberIndex(0)
    } else {
      setMemberIndex(memberIndex+1)
    }
  };

  const randomPerson = ()=>{
    setMemberIndex(Math.floor(Math.random()*listMember.length))
  }

  return (
    <article className='review'>
      {listMember.length !== 0 && <Member member={listMember[memberIndex]} />}

      <button
        className="prev-btn"
        onClick={() => {
          handlePrev();
        }}
      >
        <FcPrevious />
      </button>
      <button
        className="next-btn"
        onClick={() => {
          handleNext();
        }}
      >
        <FcNext />
      </button>
      <button className='btn btn-hipster' onClick={()=>{randomPerson()}}>
          surprise me
        </button>
    </article>
  );
};
export default App;
