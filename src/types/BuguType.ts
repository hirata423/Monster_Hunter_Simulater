export type BuguType = {
  id: number;
  name: string;
  subName: string;
  blockPoint: number;
  skill: {
    firstSK?: string;
    secondSK?: string;
    thirdSK?: string;
  };
  skillLevel: {
    firstSK?: number;
    secondSK?: number;
    thirdSK?: number;
  };
  slot: {
    firstSL?: string;
    secondSL?: string;
    thirdSL?: string;
  };
  flag: boolean;
};
