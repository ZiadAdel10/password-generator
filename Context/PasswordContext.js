import { createContext, useState, useEffect } from "react";
import {
  lowercaseCharacters,
  uppercaseCharacters,
  numberCharacters,
  symbolCharacters,
} from "../components/Characters";

const PasswordCtx = createContext({});

export const PasswordProvider = ({ children }) => {
  const minRange = 4;
  const maxRange = 10;
  const [range, setRange] = useState(minRange);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(
      !isLowercase && !isUppercase && !hasNumbers && !hasSymbols
    );
  }, [isLowercase, isUppercase, hasNumbers, hasSymbols]);

  const handleNewRange = (event) => {
    setRange(event.target.value);
  };

  const generatePassword = () => {
    let characters = "";
    if (isLowercase) {
      characters += lowercaseCharacters;
    }
    if (isUppercase) {
      characters += uppercaseCharacters;
    }
    if (hasNumbers) {
      characters += numberCharacters;
    }
    if (hasSymbols) {
      characters += symbolCharacters;
    }

    let password = "";
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };

  const handleDisability = () => {
    if (isButtonDisabled) {
      alert("Please check at least one of the boxes");
    }
  };

  const handleCopyClick = () => {
    setIsCopied(true);
    if (generatedPassword) {
      navigator.clipboard
        .writeText(generatedPassword)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((error) => {
          console.error("Failed to copy password to clipboard:", error);
        });
    } else {
      alert("Please generate a password first.");
    }
  };

  const handleUppercaseCheck = () => {
    setIsUppercase((prevState) => !prevState);
  };
  const handleLowercaseCheck = () => {
    setIsLowercase((prevState) => !prevState);
  };
  const handleHasNumbersCheck = () => {
    setHasNumbers((prevState) => !prevState);
  };
  const handleHasSymbolsCheck = () => {
    setHasSymbols((prevState) => !prevState);
  };

  return (
    <PasswordCtx.Provider
      value={{
        isCopied,
        handleCopyClick,
        generatedPassword,
        range,
        maxRange,
        minRange,
        isButtonDisabled,
        handleNewRange,
        handleHasNumbersCheck,
        handleHasSymbolsCheck,
        handleUppercaseCheck,
        handleLowercaseCheck,
        generatePassword,
        handleDisability,
      }}
    >
      {children}
    </PasswordCtx.Provider>
  );
};

export default PasswordCtx;
