import React,{useState} from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const InputSkills = (props) => {
    const [dropOne, setDropOne] = useState('');
  const [dropTwo, setDropTwo] = useState('');
  
  const changeDropOne = (event) => {
    setDropOne(event.target.value);
  };
  
  const changeDropTwo = (event) => {
    setDropTwo(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      dropOne,
      dropTwo,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setDropOne('');
    setDropTwo('');
  };
  return (
    <div className='flex gap-4'>
      
      <select value={dropOne} onChange={changeDropOne}
      className="w-full p-2 bg-gray-100 rounded-md"
      >
        <option>Choose One</option>
        <option>SkillOne</option>
        <option>SkillTwo</option>
        <option>SkillThree</option>
        <option>SkillFour</option>
      </select>
      
      <select value={dropTwo} onChange={changeDropTwo}
      className="w-full p-2 bg-gray-100 rounded-md"
      >
        <option>Choose One</option>
        <option>SkillOne</option>
        <option>SkillTwo</option>
        <option>SkillThree</option>
        <option>SkillFour</option>
      </select>
      <button onClick={transferValue}> <AiOutlinePlusCircle fill={30}/></button>
    </div>
  )
}

export default InputSkills