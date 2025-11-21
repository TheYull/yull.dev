"use client";

import { createContext, useContext, useState } from "react";


const BurgerContext = createContext(null);

export function BurgerProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((p) => !p);
    const close = () => setIsOpen(false);


  return (
    <BurgerContext.Provider value={{ isOpen, toggle, close }}>
        {children}
    </BurgerContext.Provider>
  )
};

export function useBurger() {
  const context = useContext(BurgerContext);
  if (!context) {
    throw new Error("useBurger must be used within a BurgerProvider");
  }
  return context;
};