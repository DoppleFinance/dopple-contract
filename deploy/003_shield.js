module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const FairLaunch = await ethers.getContract('FairLaunch');

    await deploy('Shield', {
        from: deployer,
        args: [deployer, FairLaunch.address],
        log: true,
    });
};

module.exports.tags = ['Shield'];