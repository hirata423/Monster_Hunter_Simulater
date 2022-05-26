import { URL, Url } from "url";

export type BuguType = {
  id: number;
  name: string;
  subName: string;
  blockPoint: number;
  skill: {
    firstSK?: string;
    secondSK?: string;
    thirdSK?: string;
    fourthSK?: string;
  };
  skillLevel: {
    firstSK?: number;
    secondSK?: number;
    thirdSK?: number;
    fourthSK?: number;
  };
  slot: {
    firstSL?: string;
    secondSL?: string;
    thirdSL?: string;
  };
  flag: boolean;
  icon?: string;
};
