import React, {useState} from 'react'

function RadioDropdown() {
    const [gender, setGender] = useState("female");
    const [city, setCity] = useState("delhi");
  return (
    <>
    <h4>Select Gender</h4>

<input
  type="radio"
  name="gender"
  id="male"
  value="male"
  onChange={(e) => setGender(e.target.value)}
  checked={gender === "male"}
/>
<label htmlFor="male">Male</label>

<input
  type="radio"
  name="gender"
  id="female"
  value="female"
  onChange={(e) => setGender(e.target.value)}
  checked={gender === "female"}
/>
<label htmlFor="female">Female</label>

<h1>Selected Gender: {gender}</h1>


<h2>Select City</h2>

<select value={city}
  onChange={(e) => setCity(e.target.value)}
>
  <option value="noida">Noida</option>
  <option value="gurgaon">Gurgaon</option>
  <option value="delhi">Delhi</option>
</select>


<h1>Selected City: {city}</h1>
    </>
  )
}

export default RadioDropdown