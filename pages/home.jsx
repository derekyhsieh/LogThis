import React, { useEffect, useLayoutEffect } from "react";
import Router, { useRouter } from "next/router";
import { useUser } from "../context/user";
import { Button } from "@chakra-ui/react";
// import { Button } from "chakra-ui/react";

function Home() {
  const { user, setUserStateAndLocalStorage } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
    } else {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setUserStateAndLocalStorage(null);
          console.log(user);
          router.push("/");
        }}
      >
        Log out
      </Button>
    </div>
  );
}

export default Home;
