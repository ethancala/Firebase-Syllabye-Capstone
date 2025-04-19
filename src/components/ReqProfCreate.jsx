import { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Alert, Spinner, Container, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const ReqProfCreate = ({ children }) => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserRole("unauthorized");
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists() && userSnap.data().role === "teacher") {
          setUserRole("teacher");
        } else {
          setUserRole("unauthorized");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        setUserRole("unauthorized");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (userRole !== "teacher") {
    return (
      <Container className="mt-4">
        <Alert variant="danger" dismissible>
          <Alert.Heading>Access Denied</Alert.Heading>
          <p>You must be a professor to create new syllabi. If you believe this is an error, please contact support.</p>
          <Button onClick={() => navigate("/Contact")} variant='dark'>  
              Contact Page
          </Button>
        </Alert>
      </Container>
    );
  }

  return <>{children}</>;
};

export default ReqProfCreate;
