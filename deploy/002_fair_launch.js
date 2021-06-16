module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const DoppleToken = await ethers.getContract('DoppleToken');
    const DOPPLE_PER_BLOCK = '50';
    const START_BLOCK = '1000';
    const BONUS_LOCKUP_BPS = '100';
    const BONUS_END_BLOCK = '100';
    await deploy('FairLaunch', {
        from: deployer,
        args: [DoppleToken.address, deployer, DOPPLE_PER_BLOCK, START_BLOCK, BONUS_LOCKUP_BPS, BONUS_END_BLOCK],
        log: true,
    });
};

module.exports.tags = ['FairLaunch'];