import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0bxjk4l6',
    dataset: 'production',
  },
})

// import {defineCliConfig} from 'sanity/cli'

// export default defineCliConfig(() => ({
//   api: {
//     projectId: '0bxjk4l6',
//     dataset: 'production',
//   },
// }))
