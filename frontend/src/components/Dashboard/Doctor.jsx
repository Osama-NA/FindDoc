import React, {useState, useContext, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../../context/User";
import Overview from './Overview/Overview'
import Doctors from './Doctors/Doctors'
import Appointments from './Appointments/Appointments'
import Profile from './Profile/Profile'
import Bookings from './Bookings/Bookings'
import Reviews from './Reviews/Reviews'
import AddSpeciality from '../Elements/AddSpeciality';

const Doctor = () => {
  const [showAddSpeciality, setShowAddSpeciality] = useState(false)

  const { userInfo } = useContext(UserContext)

  useEffect(() => {
    if(userInfo.speciality === '' || !userInfo.speciality){
      setShowAddSpeciality(true)
    }

    return () => setShowAddSpeciality(false) 
  }, [userInfo.speciality])
  
  return (
    <div className='pages-wrapper'>
      <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/reviews" element={<Reviews />} />
      </Routes>

      {
        showAddSpeciality &&
        <AddSpeciality 
          setShow={setShowAddSpeciality}
        />
      }
    </div>
  )
}

export default Doctor