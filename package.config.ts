// eslint-disable-next-line import/no-extraneous-dependencies
import { type NodePackageToolsConfig, configs, mergeConfigs } from "@wpazderski/node-package-tools";

const config: NodePackageToolsConfig = mergeConfigs(configs.base.latest, {
    licenses: {
        allowedPackages: [
            {
                name: "speakingurl",
                versions: ["14.0.1"],
                reason: 'Uses BSD-3-Clause, but it\'s recognized as "BSD" license because of the way it is defined in package.json',
            },
        ],
    },
    outdatedPackages: {
        allowedPackages: [],
    },
});

// eslint-disable-next-line import/no-default-export
export default config;
