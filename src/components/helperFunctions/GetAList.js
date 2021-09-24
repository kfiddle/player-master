import WhichServer from "./WhichServer";

const GetAList = async (whichList) => {
  const whichServer = WhichServer();

  let listOfThingsFromBackend = await fetch(whichServer + whichList);
  let incomingList = await listOfThingsFromBackend.json();
  if (incomingList.length > 0) {
    return incomingList;
  }
};

export default GetAList;
