// Home.js
import React, { useContext } from 'react';
import UserCarousel from '../components/UserCarousel.jsx';
import WelcomeMessage from '../components/WelcomeMessage.jsx';
import { AuthContext } from '../auth/AuthProvider.jsx';
import { UserContext } from '../components/UserProvider.jsx';

const Home = () => {
  const { userId, isFetching } = useContext(AuthContext);
  const { user, freelancers, topRatedFreelancers } = useContext(UserContext);

  if (!userId && isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <WelcomeMessage />
      <div className="flex justify-center text-2xl m-1">
        {/* { user && Object.entries(user).map(([key, value]) => <div key={key}>{key}: {typeof(value) === "object" ? "object" : value}</div>) } */}
      </div>
      <div className="flex flex-col gap-3">
        <div className="m-2 flex justify-center items-center">
          <UserCarousel freelancers={freelancers} />
        </div>
        <div className="m-2 flex justify-center items-center">
          <UserCarousel topRatedFreelancers={topRatedFreelancers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
