"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5b1f1ea7-24a7-48c1-a95c-16527cb87dbd");
  }, []);

  return null;
};
