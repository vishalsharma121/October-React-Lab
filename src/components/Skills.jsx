import React, { useState } from 'react';

function Skills() {
    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
  console.log(event.target.value, event.target.checked);

  if (event.target.checked) {
    setSkills([...skills, event.target.value]);
  } else {
    setSkills(skills.filter((item) => item !== event.target.value));
  }
};
  return (
    
    <>
     <h1>Select Your Skills</h1>
   
     <input type="checkbox" id="php" value="php" onChange={handleSkills} />
<label htmlFor="php">PHP</label>
<br /><br />
<input type="checkbox" id="js" value="js"  onChange={handleSkills} />
<label htmlFor="js">JS</label>
<br /><br />

<input type="checkbox" id="node" value="node" onChange={handleSkills} />
<label htmlFor="node">Node</label>
<br /><br />

<input type="checkbox" id="java" value="java" onChange={handleSkills} />
<label htmlFor="java">Java</label>

 <h2>Selected city: {skills.toString()}</h2>
    </>
  )
}

export default Skills