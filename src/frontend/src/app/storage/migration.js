const migrations = {
	0: (state) => {
		return {
			...state,
			auth: {},
		}
	},
	1: (state) => {
		return {
			...state,
			auth: state.auth,
		}
	}
}

export default migrations;

