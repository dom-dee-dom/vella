export function getErrorMessage(id) {
	return `[${id}]: ${messages[id].message}`
}

export const messages = {
	"A001": {
		message: "can't call this hook from here",
		explanation:`
Lifecycle hooks in vella are static functions.
The engine will prevent them from being registered in contexts that are not lifecycle related.
In lifecycle context, hooks can't be registered later than the time at which they can fire.
For example:

- \`removing\` and \`reflowed\` can be called from \`asap\`, but the converse isn't true
- likewise, you can call \`removing\` from \`reflowed\`, but you can't call them th other way around.
`,
		versionRange: {from: "v0.0.5"}
	},
	"A002": {
		message: "boot expects an element or a POJO specifying the nextSibling as first parameter",
		explantaion: "TODO",
		versionRange: {from: "v0.0.5"}
	},
	"A003": {
		message: "boot expects a live zone as second parameter",
		explantaion: "TODO",
		versionRange: {from: "v0.0.5"}
	},
}
