import { useEffect, useState } from "react";
import { auth, db } from "../Firebase"; // Import Firebase config
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const RequireProfessor = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserRole(null);
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const role = userSnap.data().role;
          setUserRole(role === "teacher" ? "teacher" : "unauthorized");
        } else {
          setUserRole("unauthorized");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        setUserRole("unauthorized"); // Treat as unauthorized if there's an error
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return userRole === "teacher" ? children : <Navigate to="/browse" />;
};

export default RequireProfessor;
