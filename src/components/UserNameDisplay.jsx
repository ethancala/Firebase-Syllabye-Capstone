import { useEffect, useState } from "react";
import { auth, db } from "../Firebase"; // Ensure correct Firebase config
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const capitalize = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";
};

const UserNameDisplay = () => {
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const firstName = userSnap.data().firstName || "Guest";
            setFirstName(capitalize(firstName)); // Ensure first letter is capitalized
          } else {
            setFirstName("Guest");
          }
        } catch (error) {
          console.error("Error fetching user name:", error);
          setFirstName("Error fetching name");
        }
      } else {
        setFirstName("Guest");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading user info...</p>;

  return <p>Welcome, {firstName}!</p>;
};

export default UserNameDisplay;
