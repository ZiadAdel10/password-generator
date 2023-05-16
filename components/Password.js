"use client";
import { useState, useEffect } from "react";
import { AiOutlineCopy, AiOutlineArrowRight } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import {
  lowercaseCharacters,
  uppercaseCharacters,
  numberCharacters,
  symbolCharacters,
} from "./Characters";

export default function Password() {
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

  let strength;
  if (range < 6) {
    strength = "Weak";
  } else if (range < 8) {
    strength = "Medium";
  } else if (range <= 10) {
    strength = "Strong";
  }
  return (
    <div className="flex-v gap-9">
      <div className="flex-between gap-20 bg-[#24232C] px-6 py-4">
        <h1>
          {generatedPassword === undefined
            ? alert("Check at least one of the boxes please!")
            : generatedPassword}
        </h1>
        <span
          onClick={handleCopyClick}
          className="text-[#A4FFAF] text-lg cursor-pointer"
        >
          {isCopied ? <IoCheckmarkDoneSharp /> : <AiOutlineCopy />}
        </span>
      </div>
      <div className="flex-v gap-5 bg-[#24232C] px-6 py-4">
        <div className="flex item-center gap-20">
          <span>Character Length</span>
          <span>{range}</span>
        </div>
        <input
          type="range"
          min={minRange}
          max={maxRange}
          value={range}
          onChange={handleNewRange}
          style={{
            background: `linear-gradient(to right, #A4FFAF ${
              ((parseInt(range) - minRange) * 100) / (maxRange - minRange)
            }%, #ccc 0px`,
          }}
        />
        <div className="flex item-center gap-3">
          <input
            type="checkbox"
            onChange={() => setIsUppercase((prevState) => !prevState)}
          />
          <label>Include Uppercase Letters</label>
        </div>
        <div className="flex item-center gap-3">
          <input
            type="checkbox"
            onChange={() => setIsLowercase((prevState) => !prevState)}
          />
          <label>Include Lowercase Letters</label>
        </div>
        <div className="flex item-center gap-3">
          <input
            type="checkbox"
            onChange={() => setHasNumbers((prevState) => !prevState)}
          />
          <label>Include Numbers</label>
        </div>
        <div className="flex item-center gap-3">
          <input
            type="checkbox"
            onChange={() => setHasSymbols((prevState) => !prevState)}
          />
          <label>Include Symbols</label>
        </div>
        <div className="flex-between bg-[#18171F] p-2">
          <span>Strength</span>
          <span>{strength}</span>
        </div>
        <div onClick={handleDisability} className="w-full">
          <button
            disabled={isButtonDisabled}
            onClick={generatePassword}
            className="w-full bg-[#A4FFAF] btn hover:bg-[#A4FFAF] flex-center gap-3 text-[#18171f] disabled:text-[#A4FFAF] p-2"
          >
            Generate
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
