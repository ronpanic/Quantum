import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import "./ChooseProfile.css";
import AOS from 'aos'
import  'aos/dist/aos.css'

const ChooseProfile = () => {
  const [profiles, setProfiles] = useState(() => {
    const storedProfiles = localStorage.getItem('profiles');
    return storedProfiles ? JSON.parse(storedProfiles) : [
      { id: 1, name: 'Profile', imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4gICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHN0eWxlPSJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDA7IiAvPiAgPC9zdmc+Cg==", type: 'Standard' },
    ];
  });

  const [isDeleteMode, setIsDeleteMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  const addProfile = () => {
    if (profiles.length < 4) {
      const newProfile = {
        id: profiles.length + 1,
        name: `Profile ${profiles.length + 1}`,
        imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4gICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHN0eWxlPSJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDA7IiAvPiAgPC9zdmc+Cg==",
        type: 'Standard',
      };
      setProfiles([...profiles, newProfile]);
    }
  };

  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  const handleNameChange = (id, newName) => {
    const updatedProfiles = profiles.map(profile => {
      if (profile.id === id) {
        return { ...profile, name: newName };
      }
      return profile;
    });
    setProfiles(updatedProfiles);
  };

  const handleImageChange = (id, event) => {
    if (isDeleteMode) {
      const file = event.target.files[0];

      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const updatedProfiles = profiles.map(profile => {
            if (profile.id === id) {
              return { ...profile, imgSrc: reader.result };
            }
            return profile;
          });
          setProfiles(updatedProfiles);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  useEffect(()=> {
    AOS.init({duration: 800})
  } , [])

  return (
    <div className='allprofiles-container'>
     

      <h1 data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">Who has free time now?</h1>
      <div className='profiles-container'>
        {profiles.map((profile) => (
          <div key={profile.id} className='profile' data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="600"
          data-aos-offset="0">
            {isDeleteMode && (
              <div className='delete-overlay' onClick={() => handleDelete(profile.id)}>
                <ion-icon name="ban-outline"></ion-icon>
              </div>
            )}
            <button className='profile-type'>{profile.type}</button>
              <div className='img-input-container'>
                <Link to={`/${profile.name}`}>
                  <img
                    src={profile.imgSrc}
                    alt="profileimg"
                    onClick={() => isDeleteMode && document.getElementById(`fileInput${profile.id}`).click()}
                  />
                </Link>
                <input
                  type="file"
                  id={`fileInput${profile.id}`}
                  onChange={(e) => handleImageChange(profile.id, e)}
                  accept="image/*"
                  style={{ display: 'none' }}
                  disabled={!isDeleteMode}
                />
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleNameChange(profile.id, e.target.value)}
                  disabled={!isDeleteMode}
                  maxLength={8}
                />
              </div>
          </div>
        ))}
        {profiles.length < 4 && (
          <div className='add-profile' onClick={addProfile}>
            <ion-icon name="add-circle-outline"></ion-icon>
          </div>
        )}
      </div>

      <div className='button-container'>
        <button data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" onClick={() => setIsDeleteMode(!isDeleteMode)}>
          {isDeleteMode ? "Done" : "Manage Profiles"}
        </button>
      </div>
    </div>
  );
}

export default ChooseProfile;
