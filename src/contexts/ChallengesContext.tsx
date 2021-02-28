import { createContext, useState, ReactNode } from "react";

import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  experience: number;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experieceToNextLevel: number;
  levelUp: () => void;

  challengesCompleted: number;
  activeChallenge: Challenge;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);

  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experieceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomChallengeIndex];

    setActiveChallenge(randomChallenge);
  };
  const resetChallenge = () => setActiveChallenge(null);

  const completeChallenge = () => {
    if (activeChallenge === null) return;

    const { experience } = activeChallenge;

    let newExperience = currentExperience + experience;
    if (newExperience >= experieceToNextLevel) {
      newExperience = newExperience - experieceToNextLevel;
      levelUp();
    }

    setCurrentExperience(newExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experieceToNextLevel,
        levelUp,

        challengesCompleted,
        activeChallenge,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
