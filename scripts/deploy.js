const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy first token
  const EducationToken = await ethers.getContractFactory("EducationToken");
  const educationToken = await EducationToken.deploy();
  await educationToken.deployed();
  console.log("EducationToken deployed to:", educationToken.address);

  // Deploy second token
  const CyberToken = await ethers.getContractFactory("CyberToken");
  const cyberToken = await CyberToken.deploy();
  await cyberToken.deployed();
  console.log("CyberToken deployed to:", cyberToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });