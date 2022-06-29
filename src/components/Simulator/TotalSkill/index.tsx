import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { BuguType } from "src/types/BuguType";
import HelmList from "../../../../Helm.json";
import ArmList from "../../../../Arm.json";
import MeilList from "../../../../Meil.json";
import KoilList from "../../../../Koil.json";
import Legins from "../../../../Legins.json";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HelmFix } from "../Helm/HelmFix";

export const TotalSkill = (props: any) => {
  const { setDefaultHelm, setAble } = props;
  const [defaultValue, setDefalutValue] = useState("");
  const helmList: BuguType[] = HelmList;
  const armList: BuguType[] = ArmList;
  const meilList: BuguType[] = MeilList;
  const koilList: BuguType[] = KoilList;
  const legins: BuguType[] = Legins;
  const totalList: BuguType[] = [
    ...helmList,
    ...meilList,
    ...armList,
    ...koilList,
    ...legins,
  ];
  const testChange = (e: any) => setDefalutValue(e.target.value);

  const test = totalList.filter((item: BuguType) => {
    const keyWord =
      item.name +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK +
      item.skill.fourthSK;
    return keyWord.includes(defaultValue);
  });

  // const iconList = [
  //   "./public/images/helm.jpg",
  //   "./public/images/meil.jpg",
  //   "./public/images/arm.jpg",
  //   "./public/images/koil.jpg",
  //   "./public/images/legins.jpg",
  // ];

  ////////////////////////////////////////////////////////////////////

  console.log("setDefaultHelm", setDefaultHelm);

  const mapHelmItem = test.map((item: BuguType) => {
    if (item.icon === "./public/images/helm.jpg") {
      return (
        // <MenuItem key={item.id}>
        //   <Flex>
        //     <HStack spacing="10px">
        //       <Box fontWeight="700">{item.name}</Box>
        //       <Box>
        //         {item.skill.firstSK}
        //         {item.skillLevel.firstSK}
        //       </Box>
        //       <Box>
        //         {item.skill.secondSK}
        //         {item.skillLevel.secondSK}
        //       </Box>
        //       <Box>
        //         {item.skill.thirdSK}
        //         {item.skillLevel.thirdSK}
        //       </Box>
        //       <Box>
        //         {item.skill.fourthSK}
        //         {item.skillLevel.fourthSK}
        //       </Box>
        //       <Radio size="md" colorScheme="green" />
        //     </HStack>
        //   </Flex>
        // </MenuItem>

        <Box borderBottom="1px solid white" p="15px" key={item.id}>
          <HelmFix {...item} defaultValue={defaultValue} setAble={setAble} />
        </Box>
      );
    }
  });

  // const mapMeilItem = test.map((item: BuguType) => {
  //   if (item.icon === "./public/images/meil.jpg") {
  //     return (
  //       <Box key={item.id}>
  //         <Flex>
  //           <HStack spacing="10px">
  //             <Box>{item.name}</Box>
  //             <Box>
  //               {item.skill.firstSK}
  //               {item.skillLevel.firstSK}
  //             </Box>
  //             <Box>
  //               {item.skill.secondSK}
  //               {item.skillLevel.secondSK}
  //             </Box>
  //             <Box>
  //               {item.skill.thirdSK}
  //               {item.skillLevel.thirdSK}
  //             </Box>
  //             <Box>
  //               {item.skill.fourthSK}
  //               {item.skillLevel.fourthSK}
  //             </Box>
  //           </HStack>
  //         </Flex>
  //       </Box>
  //     );
  //   }
  // });
  // const mapArmItem = test.map((item: BuguType) => {
  //   if (item.icon === "./public/images/arm.jpg") {
  //     return (
  //       <Box key={item.id}>
  //         <Flex>
  //           <HStack spacing="10px">
  //             <Box>{item.name}</Box>
  //             <Box>
  //               {item.skill.firstSK}
  //               {item.skillLevel.firstSK}
  //             </Box>
  //             <Box>
  //               {item.skill.secondSK}
  //               {item.skillLevel.secondSK}
  //             </Box>
  //             <Box>
  //               {item.skill.thirdSK}
  //               {item.skillLevel.thirdSK}
  //             </Box>
  //             <Box>
  //               {item.skill.fourthSK}
  //               {item.skillLevel.fourthSK}
  //             </Box>
  //           </HStack>
  //         </Flex>
  //       </Box>
  //     );
  //   }
  // });
  // const mapKoilItem = test.map((item: BuguType) => {
  //   if (item.icon === "./public/images/koil.jpg") {
  //     return (
  //       <Box key={item.id}>
  //         <Flex>
  //           <HStack spacing="10px">
  //             <Box>{item.name}</Box>
  //             <Box>
  //               {item.skill.firstSK}
  //               {item.skillLevel.firstSK}
  //             </Box>
  //             <Box>
  //               {item.skill.secondSK}
  //               {item.skillLevel.secondSK}
  //             </Box>
  //             <Box>
  //               {item.skill.thirdSK}
  //               {item.skillLevel.thirdSK}
  //             </Box>
  //             <Box>
  //               {item.skill.fourthSK}
  //               {item.skillLevel.fourthSK}
  //             </Box>
  //           </HStack>
  //         </Flex>
  //       </Box>
  //     );
  //   }
  // });
  // const mapLeginsItem = test.map((item: BuguType) => {
  //   if (item.icon === "./public/images/legins.jpg") {
  //     return (
  //       <Box key={item.id}>
  //         <Flex>
  //           <HStack spacing="10px">
  //             <Box>{item.name}</Box>
  //             <Box>
  //               {item.skill.firstSK}
  //               {item.skillLevel.firstSK}
  //             </Box>
  //             <Box>
  //               {item.skill.secondSK}
  //               {item.skillLevel.secondSK}
  //             </Box>
  //             <Box>
  //               {item.skill.thirdSK}
  //               {item.skillLevel.thirdSK}
  //             </Box>
  //             <Box>
  //               {item.skill.fourthSK}
  //               {item.skillLevel.fourthSK}
  //             </Box>
  //           </HStack>
  //         </Flex>
  //       </Box>
  //     );
  //   }
  // });

  return (
    <>
      <Input onChange={testChange} value={defaultValue} bgColor="green.200" />
      <Flex bgColor="green.200">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            ヘルム
          </MenuButton>
          <MenuList
            bgColor="blue.900"
            color="white"
            borderRadius="10px"
            ml="20px"
            mt="10px"
          >
            {mapHelmItem}
          </MenuList>
        </Menu>

        {/* <Box>{mapMeilItem}</Box>
        <Box>{mapArmItem}</Box>
        <Box>{mapKoilItem}</Box>
        <Box>{mapLeginsItem}</Box> */}
      </Flex>
    </>
  );
};
