const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                  @import "src/Assets/Style/Utils/Variable.scss";
                  @import "src/Assets/Style/Utils/Normalize.scss";
                  @import "src/Assets/Style/Utils/Keyframe.scss";
                  @import "src/Assets/Style/Utils/Placeholder.scss";
                `,
            },
        },
    }
}