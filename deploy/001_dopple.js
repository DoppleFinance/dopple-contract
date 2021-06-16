module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    await deploy('DoppleToken', {
        from: deployer,
        args: ['1000', '2000'],
        log: true,
    });
};

module.exports.tags = ['DoppleToken'];