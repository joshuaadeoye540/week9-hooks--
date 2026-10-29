import { useState, useEffect } from 'react';

function ProfileCard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser({
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        city: 'London'
      });

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Profile Card</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

export default ProfileCard;