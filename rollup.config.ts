import svgr from '@svgr/rollup'

export default {
    plugins: [svgr()],
    input: 'src/main.tsx',
    output: {
        file: 'bundle.js',
        format: 'cjs',
    },
}